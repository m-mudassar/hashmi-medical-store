const express = require('express');
const {
    loginUser
} = require('./login.controller');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
});
loginRouter.post('/', loginUser);

module.exports = loginRouter