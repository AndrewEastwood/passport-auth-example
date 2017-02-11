(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var log4js = require('log4js');
  var log = log4js.getLogger('controller/users/logout.js');
  var config = require('nconf');

  // End of dependencies.


  module.exports = function(req, res) {
    log.warn('User will logout');
    req.logout();
    res.redirect('/');
  };

})();
