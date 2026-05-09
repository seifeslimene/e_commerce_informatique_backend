const express = require('express');

const { User } = require('../models/user');
const { Profile } = require('../models/profile');

const router = express.Router();

router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      Profile.findOne({ user: user._id })
        .then((profile) => {
          res.json(profile);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.put('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      Profile.findOneAndUpdate({ user: user._id }, req.body)
        .then(() => {
          res.json({
            status: 204,
            message: 'Profile Was Updated Successfully',
          });
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
