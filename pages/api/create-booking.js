export const config = {
  runtime: 'edge',
};

async function directusRequest(data) {
  const response = await fetch(`${process.env.DIRECTUS_URL}/items/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Directus request failed: ${response.statusText}`);
  }

  return response.json();
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ message: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    const { bookingData } = await req.json();

    if (!bookingData) {
      return new Response(
        JSON.stringify({ message: 'Booking data is required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Calculate tax amounts
    const subtotal = parseFloat(bookingData.subtotal || 0);
    const discountAmount = parseFloat(bookingData.discountAmount || 0);
    const taxableAmount = subtotal - discountAmount;
    const taxRate = 0.13; // 13% total tax rate
    const totalTax = taxableAmount * taxRate;
    const gstAmount = totalTax / 2;
    const pstAmount = totalTax / 2;
    const totalAmount = taxableAmount + totalTax;

    // Format booking data
    const formattedBookingData = {
      // Crematorium Info
      crematorium_id: bookingData.crematoriumId,
      slot_date: bookingData.date,
      slot_time: bookingData.time,

      // Guardian Info
      guardian_name: bookingData.guardianName,
      guardian_email: bookingData.guardianEmail,
      guardian_phone: bookingData.guardianPhone,
      guardian_address: bookingData.guardianAddress,

      // Companion Info
      companion_name: bookingData.name,
      companion_type: bookingData.species,
      companion_age: bookingData.age,
      companion_weight: bookingData.weight,
      weight_range: bookingData.weightRange,
      cremation_type: bookingData.cremationType,

      // Pickup Info
      pickup_required: Boolean(bookingData.isEnabled),
      pickup_address: bookingData.pickupAddress,
      pickup_city: bookingData.pickupCity,
      pickup_postal: bookingData.pickupPostal,
      pickup_pincode: bookingData.pickupPincode,
      pickup_date: bookingData.date,
      pickup_time: bookingData.time,

      // Financial Info
      payment_status: bookingData.paymentStatus || 'pending',
      payment_intent_id: bookingData.paymentIntentId,
      status: 'active',
      subtotal: subtotal.toFixed(2),
      discount_code: bookingData.discountCode || '',
      discount_amount: discountAmount.toFixed(2),
      tax_amount: totalTax.toFixed(2),
      gst_amount: gstAmount.toFixed(2),
      pst_amount: pstAmount.toFixed(2),
      total_amount: totalAmount.toFixed(2),
      service_cost: (parseFloat(bookingData.serviceCost || 0)).toFixed(2),

      // Additional Info
      additional_notes: bookingData.additionalNotes || '',
      terms_accepted: Boolean(bookingData.termsAccepted),
    };

    // Create booking using native fetch
    const booking = await directusRequest(formattedBookingData);

    return new Response(
      JSON.stringify({ message: 'Booking created successfully', booking }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error', error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
