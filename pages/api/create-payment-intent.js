import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      bookingData,
      services,
      bookingId
    } = req.body;

    if (!bookingId) {
      return res.status(400).json({ message: 'Booking ID is required' });
    }

    // Create line items from services
    const lineItems = services.map(service => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: service.name,
          description: service.description,
        },
        unit_amount: service.amount * 100, // Convert to cents
      },
      quantity: 1,
    }));

    // Create metadata from booking data
    const metadata = {
      bookingId, // Add booking ID to metadata
      companionName: bookingData.name,
      companionSpecies: bookingData.species,
      guardianName: bookingData.guardianName,
      guardianEmail: bookingData.guardianEmail,
      guardianPhone: bookingData.guardianPhone,
      pickupAddress: `${bookingData.pickupAddress}, ${bookingData.pickupCity}, ${bookingData.pickupPostal}`,
      appointmentDate: bookingData.date,
      appointmentTime: bookingData.time,
    };

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/payment-cancelled`,
      metadata,
      customer_email: bookingData.guardianEmail,
      payment_intent_data: {
        metadata, // Also add metadata to payment intent for webhook handling
      },
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ message: 'Payment session creation failed', error: error.message });
  }
}
