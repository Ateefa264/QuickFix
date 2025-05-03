const express = require('express');
const router = express.Router();
const Request = require('../models/requestmodel');
const mongoose = require('mongoose');

// Create a new request
router.post('/', async (req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.status(201).json(request);
});

// Get requests for a user
router.get('/user/:userId', async (req, res) => {
  const requests = await Request.find({ user: req.params.userId });
  res.json(requests);
});

// Get requests for a professional
router.get('/professional/:proId', async (req, res) => {
  const requests = await Request.find({ professional: req.params.proId });
  res.json(requests);
});

// Update request (status, assignment, etc.)
router.put('/:id', async (req, res) => {
  const updated = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


module.exports = router;
