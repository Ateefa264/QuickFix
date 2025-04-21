// models/Professional.js
const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  skills: [{ type: String }],
  rating: { type: Number, default: 0 },
  completed_requests: { type: Number, default: 0 },
  profile_picture_url: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Professional', professionalSchema);
