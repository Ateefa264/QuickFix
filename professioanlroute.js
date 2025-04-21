// routes/professionals.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Professional = require('../models/professionalmodel');

const router = express.Router();

// Register Professional
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, address, skills } = req.body;

    const exists = await Professional.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const professional = new Professional({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      skills
    });

    await professional.save();
    res.status(201).json({ message: 'Professional registered successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Error registering professional', error: err.message });
  }
});

// Login Professional
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const professional = await Professional.findOne({ email });
    if (!professional) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, professional.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { professionalId: professional._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, professional });

  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

// Get Professional Profile
router.get('/profile/:id', async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id).select('-password');
    if (!professional) return res.status(404).json({ message: 'Professional not found' });

    res.json(professional);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

module.exports = router;
