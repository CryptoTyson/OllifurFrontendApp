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

    // Calculate tax amounts
    const subtotal = parseFloat(bookingData.subtotal || 0);
    const discountAmount = parseFloat(bookingData.discountAmount || 0);
    const taxableAmount = subtotal - discountAmount;
    const taxRate = 0.13; // 13% total tax rate
    const totalTax = taxableAmount * taxRate;
    const gstAmount = totalTax / 2; // Split tax evenly between GST and PST
    const pstAmount = totalTax / 2;
    const totalAmount = taxableAmount + totalTax;

    // Format booking data with all required fields
    const formattedBookingData = {
      ...bookingData,
      // Ensure all required fields are present and properly formatted
      subtotal: subtotal.toFixed(2),
      discount_amount: discountAmount.toFixed(2),
      tax_amount: totalTax.toFixed(2),
      gst_amount: gstAmount.toFixed(2),
      pst_amount: pstAmount.toFixed(2),
      total_amount: totalAmount.toFixed(2),
      service_cost: (parseFloat(bookingData.serviceCost || 0)).toFixed(2),

      // Convert boolean values
      pickup_required: Boolean(bookingData.isEnabled),
      terms_accepted: Boolean(bookingData.termsAccepted),

      // Ensure optional fields have default values
      additional_notes: bookingData.additionalNotes || '',
      discount_code: bookingData.discountCode || '',

      // Status fields
      status: 'active',
      payment_status: bookingData.paymentStatus || 'pending',
    };

    // Create booking in Directus
    const booking = await createBooking(formattedBookingData);

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
