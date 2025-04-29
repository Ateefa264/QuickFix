// // models/Professional.js
// /*const mongoose = require('mongoose');

// const professionalSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   phone: { type: String, required: true },
//   address: { type: String },
//   skills: [{ type: String }],
//   rating: { type: Number, default: 0 },
//   completed_requests: { type: Number, default: 0 },
//   profile_picture_url: { type: String },
//   created_at: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Professional', professionalSchema);
// */

// const mongoose = require('mongoose');

// const professionalSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phone: { type: String },
//   address: { type: String },
//   skills: [String],
//   // Ensure user_type is NOT required here, as it's not part of the professional model
//   // user_type: { type: String, required: false }
// }, { timestamps: true });

// module.exports = mongoose.model('Professional', professionalSchema);

const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  skills: [{ type: String }],

  // Optional fields for extended functionality
  rating: { type: Number, default: 0 },
  completed_requests: { type: Number, default: 0 },
  profile_picture_url: { type: String },

}, { timestamps: true });

module.exports = mongoose.model('Professional', professionalSchema);
