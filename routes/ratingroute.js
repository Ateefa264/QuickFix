const express = require('express');
const router = express.Router();
const Rating = require('../models/ratingmodel');

// Submit rating
router.post('/', async (req, res) => {
  const rating = new Rating(req.body);
  await rating.save();
  res.status(201).json(rating);
});

// Get average rating for professional
router.get('/professional/:id', async (req, res) => {
  const ratings = await Rating.find({ professional: req.params.id });
  const avg = ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length || 0;
  res.json({ average: avg.toFixed(1), total: ratings.length });
});

module.exports = router;
