"use strict";

var _require = require('../db'),
    connectdb = _require.connectdb,
    disconnectdb = _require.disconnectdb;

var users = require('./users.mongo');

function addUser(email, password) {
  var user;
  return regeneratorRuntime.async(function addUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connectdb());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(users.findOne({
            email: email
          }).exec());

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(users.create({
            email: email,
            password: password
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(disconnectdb());

        case 10:
          return _context.abrupt("return", true);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

function verifyUser(email, password) {
  var user;
  return regeneratorRuntime.async(function verifyUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(connectdb());

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(users.findOne({
            email: email,
            password: password
          }).exec());

        case 4:
          user = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(disconnectdb());

        case 7:
          if (!user) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", true);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  addUser: addUser,
  verifyUser: verifyUser
};