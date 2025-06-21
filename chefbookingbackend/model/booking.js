const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  chef_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chef",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, //e.g., "6PM–7PM"
    required: true,
  },
  totalPrice: Number,
  paid: {
    type: Boolean,
    default: false,
  },
  Address: {
    type: String,
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Booking", BookingSchema);
