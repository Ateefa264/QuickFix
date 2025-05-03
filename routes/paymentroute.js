const express = require('express');
const router = express.Router();
const Payment = require('../models/paymentmodel');

// Record payment and store professional reference
router.post('/', async (req, res) => {
  try {
    const { user, professional, amount, paymentMethod, status } = req.body;
    
    // Ensure the professional field is present
    if (!professional) {
      return res.status(400).json({ message: "Professional field is required." });
    }

    // Create a new payment record
    const payment = new Payment({
      user,
      professional,  // Store professional reference
      amount,
      paymentMethod,
      status
    });

    // Save the payment to the database
    await payment.save();
    
    // Respond with the created payment
    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error recording payment." });
  }
});
const mongoose = require('mongoose');

// Get all payments for a specific professional
router.get('/professional/:professionalId', async (req, res) => {
  try {
    const professionalId = req.params.professionalId.trim();
    console.log("Received professionalId:", professionalId);

    // Validate the professionalId is a valid ObjectId format
    if (!mongoose.Types.ObjectId.isValid(professionalId)) {
      console.log("Invalid ObjectId format:", professionalId);
      return res.status(400).json({ message: "Invalid professional ID format." });
    }

    const objectId = mongoose.Types.ObjectId(professionalId);
    console.log("Converted ObjectId:", objectId);

    // Query the database for payments linked to this professional
    const payments = await Payment.find({ professional: objectId }).exec();
    console.log("Payments found for this professional:", payments);

    if (payments.length === 0) {
      return res.status(404).json({ message: "No payments found for this professional." });
    }

    res.json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error.message);
    console.error("Stack trace:", error.stack);
    res.status(500).json({ message: "Error fetching payments." });
  }
});



// Get all payments for a user
// router.get('/user/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId.trim();  // Ensure there's no extra space or newline
//     console.log("UserId from request:", userId);  // Log the userId from the request

//     // Validate if userId is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       console.log("Invalid ObjectId format:", userId);  // Log invalid ID format
//       return res.status(400).json({ message: "Invalid user ID format." });
//     }

//     const objectId = mongoose.Types.ObjectId(userId); // Convert string to ObjectId
//     console.log("Converted ObjectId:", objectId);  // Log the converted ObjectId

//     // Query payments for the user with the correct ObjectId
//     const payments = await Payment.find({ user: objectId });

//     console.log("Payments found:", payments);  // Log the result of the database query

//     if (!payments.length) {
//       return res.status(404).json({ message: "No payments found for this user." });
//     }

//     res.json(payments);
//   } catch (error) {
//     console.error("Error encountered:", error);  // Log any errors
//     res.status(400).json({ message: "Invalid user ID or something went wrong." });
//   }
// });
// Get all payments for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId || !mongoose.isValidObjectId(userId)) {
      return res.status(400).json({ message: "Invalid or missing user ID." });
    }

    const payments = await Payment.find({ user: userId });

    if (!payments.length) {
      return res.status(404).json({ message: "No payments found for this user." });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments for user:", error);
    res.status(500).json({ message: "Server error while fetching payments." });
  }
});



module.exports = router;
