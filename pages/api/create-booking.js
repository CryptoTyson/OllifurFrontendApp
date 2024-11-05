import { createBooking } from '~/lib/directus';
import { sendEmail } from '~/lib/email';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { bookingData } = req.body;

    if (!bookingData) {
      return res.status(400).json({ message: 'Booking data is required' });
    }

    // Create booking in Directus
    const booking = await createBooking(bookingData);

    // Send confirmation email
    // await sendEmail(
    //   bookingData.guardianEmail,
    //   'Booking Confirmation',
    //   `Your booking has been confirmed. Details: ${JSON.stringify(bookingData)}`
    // );

    return res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
