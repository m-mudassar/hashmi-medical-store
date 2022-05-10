"use strict";

var express = require('express');

var _require = require('./login.controller'),
    loginUser = _require.loginUser;

var loginRouter = express.Router();
loginRouter.get('/', function (req, res) {
  res.render('login');
});
loginRouter.post('/', loginUser);
module.exports = loginRouter;