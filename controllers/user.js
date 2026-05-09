const express = require('express');

const { User } = require('../models/user');
const { Profile } = require('../models/user');

const router = express.Router();

router.post('/', (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((newUser) => {
      Profile.insertOne({ firstName: '', lastName: '' })
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });

  res.json({
    status: 201,
    message: 'User Was Added Successfully',
  });
});

router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.put('/:id', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({
        status: 204,
        message: 'User Was Updated Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.delete('/:id', (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({
        status: 200,
        message: 'User Was Deleted Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
