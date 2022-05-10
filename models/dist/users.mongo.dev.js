"use strict";

var mongoose = require('mongoose');

var _require = require('nodemon/lib/utils'),
    stringify = _require.stringify;

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('users', userSchema);