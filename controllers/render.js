(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var log4js = require('log4js');
  var log = log4js.getLogger('controller/render.js');
  var config         = require('nconf');

  // End of dependencies.


  /**
   * Wrapper over res.render().
   */
  module.exports = function(template, variables) {
    return function (req, res) {
      res.render(template, variables);
    };
  };

})();
