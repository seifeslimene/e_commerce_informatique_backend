const express = require('express');

const { Product } = require('../models/product');

const router = express.Router();

router.post('/', (req, res) => {
  const newProduct = new Product(req.body);

  newProduct
    .save()
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });

  res.json({
    status: 201,
    message: 'Product Was Added Successfully',
  });
});

router.get('/', (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get('/:id', (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.put('/:id', (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({
        status: 204,
        message: 'Product Was Updated Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.delete('/:id', (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({
        status: 200,
        message: 'Product Was Deleted Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
