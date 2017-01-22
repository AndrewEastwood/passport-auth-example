(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var log4js = require('log4js');
  var log = log4js.getLogger('middlewares/express-logger.js');

  // end of dependencies.


  /**
   * Custom logger for express requests.
   */
  module.exports = function(req, res, next) {

    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var time = hh+':'+mm;

    log.info(time, '[' + req.method + ']:', req.url);
    next();
  };

})();
