'use strict'; 

/**
 * Module dependencies.
 */
var log     = require('../lib/utils').log(module);

// end of dependencies.


/**
 * Custom logger for express requests. 
 */
module.exports = function(req, res, next) {

  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var time = hh+':'+mm;
  
  log.info(time, '['+req.method.grey+']:', req.url);
  next();
};