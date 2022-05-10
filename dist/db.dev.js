"use strict";

var mongoose = require('mongoose');

var uri = "mongodb+srv://codebiters:malik786@cluster0.lpv4k.mongodb.net/hashmi-medical-store?retryWrites=true&w=majority";

function connectdb() {
  return regeneratorRuntime.async(function connectdb$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(uri));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(console.log("Mongodb connection ready"));

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log("Error connecting mongodb");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function disconnectdb() {
  return regeneratorRuntime.async(function disconnectdb$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(mongoose.connection.close());

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(console.log("Mongodb connection closed"));

        case 5:
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log("Error disconnecting mongodb");

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

module.exports = {
  connectdb: connectdb,
  disconnectdb: disconnectdb
};