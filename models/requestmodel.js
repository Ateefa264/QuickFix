// // // models/Request.js
// // const mongoose = require('mongoose');
// // const requestSchema = new mongoose.Schema({
// //     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// //     professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
// //     service: { type: String },  
// //     status: { type: String, default: 'pending' },
// //     scheduledTime: Date,
// //     location: String,
// //     details: String
// // }, { timestamps: true });

// module.exports = mongoose.model('Request', requestSchema);


const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const requestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: String,
  status: { type: String, default: 'open' },
  professional: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bids: [bidSchema]
});


module.exports = mongoose.model('Request', requestSchema);
