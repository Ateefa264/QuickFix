//  models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  basePrice: Number
});

module.exports = mongoose.model('Service', serviceSchema);