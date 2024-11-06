import { createDirectus, staticToken, rest, createItem, updateItem, readItem } from '@directus/sdk';

// Define the schema type for our collections
const directus = createDirectus(process.env.DIRECTUS_URL || '')
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_TOKEN || ''));

// Helper functions for bookings collection
export async function createBooking(bookingData) {
  try {
    const booking = await directus.request(createItem('bookings', {
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
      pickup_required: bookingData.isEnabled || false,
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
      subtotal: bookingData.subtotal || '0.00',
      discount_code: bookingData.discountCode || '',
      discount_amount: bookingData.discountAmount || '0.00',
      tax_amount: bookingData.taxAmount || '0.00',
      gst_amount: bookingData.gstAmount || '0.00',
      pst_amount: bookingData.pstAmount || '0.00',
      total_amount: bookingData.totalAmount || '0.00',
      service_cost: bookingData.serviceCost || '0.00',

      // Additional Info
      additional_notes: bookingData.additionalNotes || '',
      terms_accepted: bookingData.termsAccepted || false,
    }));
    return booking;
  } catch (error) {
    console.error('Failed to create booking:', error);
    throw error;
  }
}

export async function updateBooking(id, updateData) {
  try {
    console.log('Updating booking:', id, updateData);
    const booking = await directus.request(updateItem('bookings', id, updateData));
    return booking;
  } catch (error) {
    console.error('Failed to update booking:', error);
    throw error;
  }
}

export async function getBookings(query = {}) {
  try {
    const bookings = await directus.request(readItem('bookings', query));
    return bookings;
  } catch (error) {
    console.error('Failed to get bookings:', error);
    throw error;
  }
}

export default directus;
