'use strict';

/**
 * Module dependencies.
 */
var log            = require('../../lib/utils').log(module);
var config         = require('../../lib/utils').config;
var passport       = require('passport');

// End of dependencies.


module.exports = function(req, res) {
  req.logout();
  res.redirect('/');
};