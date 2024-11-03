import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ message: 'Session ID is required' });
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent', 'customer'],
    });

    // Verify the payment was successful
    if (session.payment_status !== 'paid') {
      return res.status(400).json({
        message: 'Payment has not been completed',
        status: session.payment_status,
      });
    }

    // Get the booking details from metadata
    const bookingDetails = session.metadata;

    // Here you would typically:
    // 1. Save the booking to your database
    // 2. Send confirmation emails
    // 3. Update any relevant systems

    // For now, we'll just return success
    return res.status(200).json({
      success: true,
      bookingDetails,
      paymentIntent: session.payment_intent,
      customer: session.customer,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({
      message: 'Payment verification failed',
      error: error.message,
    });
  }
}
