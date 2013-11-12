'use strict';

/**
 * Module dependencies.
 */
var log            = require('winston-wrapper')(module);
var config         = require('nconf');

// End of dependencies.


module.exports = function(req, res) {
  req.logout();
  res.redirect('/');
};