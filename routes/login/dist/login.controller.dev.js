"use strict";

var _require = require('../../models/users.model'),
    verifyUser = _require.verifyUser;

function loginUser(req, res) {
  var email, password;
  return regeneratorRuntime.async(function loginUser$(_context) {
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

          return _context.abrupt("return", res.render('login', {
            error: "Empty email OR password field"
          }));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(verifyUser(email, password));

        case 12:
          if (!_context.sent) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.render('dashboard'));

        case 16:
          return _context.abrupt("return", res.render('login', {
            error: "something went wrong"
          }));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  loginUser: loginUser
};