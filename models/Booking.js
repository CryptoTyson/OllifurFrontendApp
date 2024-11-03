import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  crematoriumId: {
    type: String,
    required: true
  },
  slot: {
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  },
  guardian: {
    name: String,
    email: {
      type: String,
      required: true
    },
    phone: String,
    address: String
  },
  companion: {
    name: String,
    type: String,
    age: Number,
    weight: Number
  },
  pickup: {
    required: Boolean,
    address: String,
    date: Date,
    time: String
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentIntentId: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
