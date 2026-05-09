const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Profile = mongoose.model('Profile', profileSchema);

exports.Profile = Profile;
exports.profileSchema = profileSchema;
