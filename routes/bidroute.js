const express = require('express');
const router = express.Router();
const Bid = require('../models/bidmodel');
const Request = require('../models/requestmodel');
module.exports = router;

// Create a bid on a request
// Route: POST /bids
router.post('/', async (req, res) => {
    const { request, professional, amount } = req.body;
  
    const existing = await Bid.findOne({ request, professional });
    if (existing) {
      return res.status(400).json({ error: 'You already placed a bid on this request.' });
    }
  
    const bid = new Bid({ request, professional, amount, message });
    await bid.save();
    res.status(201).json(bid);
  });

// Get all bids for a specific request
router.get('/request/:requestId', async (req, res) => {
  const bids = await Bid.find({ request: req.params.requestId }).populate('professional');
  res.json(bids);
});

// User selects a bid
router.put('/select/:bidId', async (req, res) => {
  const bid = await Bid.findById(req.params.bidId);
  if (!bid) return res.status(404).json({ error: 'Bid not found' });

  // Reject all other bids on the same request
  await Bid.updateMany(
    { request: bid.request, _id: { $ne: bid._id } },
    { $set: { status: 'rejected' } }
  );

  // Accept this bid
  bid.status = 'accepted';
  await bid.save();

  // Optionally, update the request with selected professional
  await Request.findByIdAndUpdate(bid.request, {
    professional: bid.professional,
    status: 'assigned'
  });

  res.json({ message: 'Bid accepted successfully', bid });
});

module.exports = router;
