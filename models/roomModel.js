const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true },
  roomSize: { type: String, required: true },
  roomNumber: { type: Number, required: true },
  occupancy: { type: Number, required: true },
  bedTypes: { type: [String], required: true },
  price: { type: Number, required: true },
  roomView: { type: String, required: true },
  amenities: { type: [String], required: true },
  bookingPolicy: { type: String, required: true },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
