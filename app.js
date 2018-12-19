'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var cors = require('cors');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  app.use(cors());

  var port = process.env.VCAP_APP_PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/testServer']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/testServer');
  }
});
