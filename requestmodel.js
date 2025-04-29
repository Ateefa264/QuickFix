// models/Request.js
const mongoose = require('mongoose');
const requestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
    service: { type: String },  
    status: { type: String, default: 'pending' },
    scheduledTime: Date,
    location: String,
    details: String
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
