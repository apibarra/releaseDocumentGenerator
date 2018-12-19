'use strict';

var util = require('util');

function testServer(req, res) {

  res.json('The server is running;');
}

module.exports = {
  testServer: testServer
};
