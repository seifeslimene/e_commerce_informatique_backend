const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required',
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        error: "Can't find any account with this Email",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'Sorry, Password Is Wrong',
      });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        role: existingUser.role,
        userId: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2days',
      }
    );

    return res.status(200).json({
      token,
      userId: existingUser._id,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
});

module.exports = router;
