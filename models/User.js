const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 15
  },
  email: String,
  password: {
    type: String
  }
});

userSchema.plugin(passportLocalMongoose, {
  usernameLowerCase: true
});

module.exports = mongoose.model('User', userSchema);
