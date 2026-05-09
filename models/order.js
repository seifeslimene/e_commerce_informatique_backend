const mongoose = require('mongoose');

const { Schema } = mongoose;

const { productSchema } = require('./product')

const orderSchema = new Schema({
  quantity: Number,
  totalPrice: Number,
  products: [productSchema],
  state: {
    type: String,
    enum: ['pending', 'declined', 'finished'],
  },
});

const Order = mongoose.model('Order', orderSchema);

exports.Order = Order;
exports.orderSchema = orderSchema;
