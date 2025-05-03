// 


const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Professional = require('../models/professionalmodel');
const router = express.Router();

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Authorization header missing' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });

    req.professionalId = payload.professionalId; // store professional ID from token
    next();
  });
}

// Register Professional + issue token
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

    const token = jwt.sign({ professionalId: professional._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(201).json({ message: 'Professional registered successfully', token });

  } catch (err) {
    res.status(500).json({ message: 'Error registering professional', error: err.message });
  }
});

// Login Professional + issue token
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const professional = await Professional.findOne({ email });
    if (!professional) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, professional.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ professionalId: professional._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.json({ token, professional });

  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

// Protected route to get profile using token
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const professional = await Professional.findById(req.professionalId).select('-password');
    if (!professional) return res.status(404).json({ message: 'Professional not found' });

    res.json(professional);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

module.exports = router;
