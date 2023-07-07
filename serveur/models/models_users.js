// import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');
// ****************************champs souhaites avec la methode Schema
const User = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default : false },
  picture: { type: String, required: false },
});

module.exports = mongoose.model('user', User);
