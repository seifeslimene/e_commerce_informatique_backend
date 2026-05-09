const mongoose = require('mongoose');

const { productSchema } = require('./product')

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  products: [productSchema]
});

const Category = mongoose.model('Category', categorySchema);

exports.Category = Category;
exports.categorySchema = categorySchema;
