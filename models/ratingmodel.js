//  models/Rating.js
const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
    stars: { type: Number, min: 1, max: 5 },
    comment: String
  }, { timestamps: true });
  
  module.exports = mongoose.model('Rating', ratingSchema);