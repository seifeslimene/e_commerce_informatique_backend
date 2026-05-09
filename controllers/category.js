const express = require('express');

const { Category } = require('../models/category');
const { Product } = require('../models/product');

const router = express.Router();

router.post('/', (req, res) => {
  const newCategory = new Category(req.body);

  newCategory
    .save()
    .then((category) => {
      const { name } = category;

      Product.find({ category: name })
        .exec()
        .then((products) => {
          products.map((product) => {
            category.products.push(product._id);
          });

          category.save();
        });
    })
    .catch((error) => {
      console.error(error);
    });

  res.json({
    status: 201,
    message: 'Category Was Added Successfully',
  });
});

router.get('/', (req, res) => {
  Category.find()
    .then((Categories) => {
      res.json(Categories);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get('/:id', (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then((Category) => {
      res.json(Category);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.put('/:id', (req, res) => {
  Category.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({
        status: 204,
        message: 'Category Was Updated Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.delete('/:id', (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({
        status: 200,
        message: 'Category Was Deleted Successfully',
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
