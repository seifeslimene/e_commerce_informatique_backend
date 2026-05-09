const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);

exports.User = User;
exports.userSchema = userSchema;
