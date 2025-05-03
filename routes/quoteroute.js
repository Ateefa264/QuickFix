const express = require('express');
const router = express.Router();
const Quote = require('../models/quotemodel');

// Send quote
router.post('/send', async (req, res) => {
  const quote = new Quote(req.body);
  await quote.save();
  res.status(201).json(quote);
});

// Accept quote
router.put('/accept/:quoteId', async (req, res) => {
  const updated = await Quote.findByIdAndUpdate(req.params.quoteId, { status: 'accepted' }, { new: true });
  res.json(updated);
});

// Get quotes by user
router.get('/user/:userId', async (req, res) => {
  const quotes = await Quote.find({ user: req.params.userId });
  res.json(quotes);
});

module.exports = router;
