import Stripe from 'stripe';
import { updateBooking } from '../../lib/directus';

export const runtime = 'edge';

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

    // Get the booking ID from metadata
    const bookingId = session.metadata?.bookingId;

    if (!bookingId) {
      return res.status(400).json({ message: 'Booking ID not found in session metadata' });
    }

    // Update the booking in Directus
    await updateBooking(bookingId, {
      payment_status: 'paid',
      payment_intent_id: session.payment_intent.id,
      customer_id: session.customer?.id,
      status: 'confirmed'
    });

    console.log('Booking ID:', bookingId);

    return res.status(200).json({
      success: true,
      bookingId,
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
