const express = require('express');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const { User } = require('../models/user');
const { Profile } = require('../models/profile');

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

    if (existingUser) {
      return res.status(409).json({
        error: 'Email already exists',
      });
    }

    const hash = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ email, password: hash });

    await Profile.create({ firstName: '', lastName: '', user: [user._id] });

    return res.status(201).json({
      status: 201,
      message: 'User Was Added Successfully',
      userId: user._id,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
});

module.exports = router;
