"use strict";

var express = require('express');

var _require = require('./register.controller'),
    postUser = _require.postUser;

var registerRouter = express.Router();
registerRouter.get('/', function (req, res) {
  res.render('register');
});
registerRouter.post('/', postUser);
module.exports = registerRouter;