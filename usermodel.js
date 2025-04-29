// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  user_type: { type: String, enum: ['user', 'Professional'], required: true },
  profile_picture_url: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);


/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  user_type: {
    type: String,
    enum: ['user', 'professional'], // This limits user_type to only 'user' or 'professional'
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
*/
