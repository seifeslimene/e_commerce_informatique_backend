const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

exports.Product = Product;
exports.productSchema = productSchema;
