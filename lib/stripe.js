import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const stripe = {
  initiatePayment: async (bookingData, services, bookingId) => {
    try {
      // Get Stripe instance
      const stripeInstance = await stripePromise;
      if (!stripeInstance) throw new Error('Stripe failed to initialize');

      // Create a payment intent on your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingData, services, bookingId }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      // Redirect to Stripe Checkout
      const result = await stripeInstance.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      throw error;
    }
  }
};

export default stripe;
