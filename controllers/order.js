const express = require('express');

const { Order } = require('../models/order');

const router = express.Router();

router.post('/', (req, res) => {
  const newOrder = new Order(req.body);

  newOrder
    .save()
    .then((order) => {
      const { products } = req.body;

      products.map((product) => {
        order.products.push(product._id);
        order.state = 'pending';
      });
    })
    .catch((error) => {
      console.error(error);
    });

  res.json({
    status: 201,
    message: 'Order Was Added Successfully',
  });
});

router.put('/:id', (req, res) => {
  Order.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({
        status: 204,
        message: 'Order Was Updated Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get('/', (req, res) => {
  Order.find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get('/:id', (req, res) => {
  Order.findOne({ _id: req.params.id })
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
