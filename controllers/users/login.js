(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var log4js         = require('log4js');
  var log            = log4js.getLogger('controller/users/login.js');
  var config         = require('nconf');
  var passport       = require('passport');

  // End of dependencies.


  module.exports = function(req, res, next) {

    log.info('someone trying to login');

    passport.authenticate('local', {
      successRedirect: '/private',
      failureRedirect: '/'
    })(req, res, next);

  };

})();
