// models/Quote.js
const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
    request: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
    price: Number,
    message: String,
    status: { type: String, default: 'pending' }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Quote', quoteSchema);