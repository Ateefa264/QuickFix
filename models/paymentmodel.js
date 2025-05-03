// models/Payment.js
const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
    request: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' },
    amount: Number,
    paymentMethod: String,
    status: { type: String, default: 'completed' }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Payment', paymentSchema);
  
  