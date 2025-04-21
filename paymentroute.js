const express = require('express');
const router = express.Router();
const Payment = require('../models/paymentmodel');

// Record payment
router.post('/', async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.status(201).json(payment);
});

// Get all payments for a user
router.get('/user/:userId', async (req, res) => {
  const payments = await Payment.find({ user: req.params.userId });
  res.json(payments);
});

module.exports = router;
