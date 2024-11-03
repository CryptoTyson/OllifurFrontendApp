import clientPromise from '../../lib/mongodb';
import sendEmail from '../../lib/email';
import Booking from '../../models/Booking';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { bookingData } = req.body;

  if (!bookingData) {
    return res.status(400).json({ message: 'Booking data is required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    const booking = new Booking(bookingData);
    await db.collection('bookings').insertOne(booking);

    // Send email notification
    await sendEmail(
      bookingData.guardianEmail,
      'Booking Confirmation',
      `Your booking has been confirmed. Details: ${JSON.stringify(bookingData)}`
    );

    return res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
