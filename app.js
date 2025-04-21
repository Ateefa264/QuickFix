
/*
// app.js
const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
//app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Basic Test Route
app.get('/', (req, res) => {
  res.send('🔧 QuickFix API is running...');
});

// TODO: Import routes (you can modularize them)
const userRoutes = require('./routes/useroute');
//const serviceRoutes = require('./routes/services');
// Add more routes as needed

app.use('/users', userRoutes);
//app.use('/api/services', serviceRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
*/

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
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
  res.send('🔧 QuickFix API is running...');
});

// Routes
const userRoutes = require('./routes/useroute');
const professionalRoutes = require('./routes/professioanlroute');
// const serviceRoutes = require('./routes/services'); // For future use

app.use('/users', userRoutes);
app.use('/professionals', professionalRoutes);
// app.use('/services', serviceRoutes); // Future route

// Optional: Global error handler (for debugging)
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
