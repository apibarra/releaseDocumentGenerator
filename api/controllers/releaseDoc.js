'use strict';

var util = require('util');

function callCreateReleaseDoc(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var body = req.swagger.params;

  var repositoryName
  var releaseName


  var parameters = body.text.originalValue.text;
  var paramerList = parameters.split(',');
  res
    .status(200)
    .json(paramerList);
}

module.exports = {
  callCreateReleaseDoc: callCreateReleaseDoc
};