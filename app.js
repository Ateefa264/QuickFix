// app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
  res.send('QuickFix API is running...');
});

// Routes
const userRoutes = require('./routes/useroute');
const professionalRoutes = require('./routes/professioanlroute');
const requestRoutes = require('./routes/requestroute');
const quoteRoutes = require('./routes/quoteroute');
const paymentRoutes = require('./routes/paymentroute');
const ratingRoutes = require('./routes/ratingroute');
const serviceRoutes = require('./routes/serviceroute');

app.use('/users', userRoutes);
app.use('/professionals', professionalRoutes);
app.use('/requests', requestRoutes);
app.use('/quotes', quoteRoutes);
app.use('/payments', paymentRoutes);
app.use('/ratings', ratingRoutes);
app.use('/services', serviceRoutes);

// Optional: Global error handler (for debugging)
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
