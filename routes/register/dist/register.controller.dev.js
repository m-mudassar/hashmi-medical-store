"use strict";

var _require = require('../../models/users.model'),
    addUser = _require.addUser;

function postUser(req, res) {
  var email, password;
  return regeneratorRuntime.async(function postUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.body.email);

        case 2:
          email = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(req.body.password);

        case 5:
          password = _context.sent;
          console.log(email);
          console.log(password);

          if (!(!email || !password)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.render('register', {
            error: "Empty email OR password field"
          }));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(addUser(email, password));

        case 12:
          if (!_context.sent) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.render('register', {
            success: "Sign Up Success"
          }));

        case 16:
          return _context.abrupt("return", res.render('register', {
            error: "User already exists OR Something went wrong"
          }));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  postUser: postUser
};