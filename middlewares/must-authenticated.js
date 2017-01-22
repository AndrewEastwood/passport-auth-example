(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var log4js = require('log4js');
  var log = log4js.getLogger('middlewares/must-authenticated.js');

  // End of dependencies.


  module.exports = function (req, res, next){
    req.isAuthenticated()
      ? next()
      : res.redirect('/');
  };

})();
