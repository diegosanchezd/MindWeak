const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  isProfesor: Boolean,
  isResponsible: Boolean,
  isStudent: Boolean
},{
  collection: 'userDetails'
});

module.exports = mongoose.model("User", userSchema)