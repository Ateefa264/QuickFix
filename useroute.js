// routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, address, user_type } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashed,
      phone,
      address,
      user_type
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id, userType: user.user_type }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.json({ token, user });

  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

// Get Profile by ID
router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user profile', error: err.message });
  }
});

module.exports = router;
