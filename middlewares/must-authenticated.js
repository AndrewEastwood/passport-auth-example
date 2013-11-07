'use strict';

/**
 * Module dependencies.
 */
var log = require('../lib/utils').log(module);

// End of dependencies.


module.exports = function (req, res, next){
  req.isAuthenticated()
    ? next()
    : res.redirect('/');
};