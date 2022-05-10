"use strict";

var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var loginRouter = require('./routes/login/login.router');

var registerRouter = require('./routes/register/register.router');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
var PORT = 3000;
app.use(express.json());
app.use('/', express["static"](path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.render('login');
});
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.listen(PORT, function () {
  console.log("Listening on PORT ".concat(PORT, " ..."));
});