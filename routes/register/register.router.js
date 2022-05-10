const express = require('express');
const { postUser } = require('./register.controller');

const registerRouter = express.Router();

registerRouter.get('/', (req, res) => {
    res.render('register');
})
registerRouter.post('/', postUser);

module.exports = registerRouter;