const express = require('express');
const router = express.Router();
const Service = require('../models/servicemodel');

// GET all services
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// GET single service
router.get('/:id', async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
});

// POST add a service
router.post('/', async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.status(201).json(newService);
});

module.exports = router;
