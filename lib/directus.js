import { createDirectus, staticToken, rest, createItem, updateItem, readItem } from '@directus/sdk';

// Define the schema type for our collections
const directus = createDirectus(process.env.DIRECTUS_URL || '')
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_TOKEN || ''));
// Helper functions for bookings collection
export async function createBooking(bookingData) {
  try {
    const booking = await directus.request(createItem('bookings', {
      crematorium_id: bookingData.crematoriumId,
      slot_date: bookingData.date,
      slot_time: bookingData.time,
      guardian_name: bookingData.guardianName,
      guardian_email: bookingData.guardianEmail,
      guardian_phone: bookingData.guardianPhone,
      guardian_address: bookingData.guardianAddress,
      companion_name: bookingData.name,
      companion_type: bookingData.species,
      companion_age: bookingData.age,
      companion_weight: bookingData.weight,
      pickup_required: true,
      pickup_address: bookingData.pickupAddress,
      pickup_date: bookingData.date,
      pickup_time: bookingData.time,
      payment_status: bookingData.paymentStatus || 'pending',
      payment_intent_id: bookingData.paymentIntentId,
      status: 'active',
      subtotal: '0.00',
      tax_amount: '0.00',
      total_amount: '0.00',
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
