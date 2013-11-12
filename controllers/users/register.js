'use strict';

/**
 * Module dependencies.
 */
var log            = require('winston-wrapper')(module);
var config         = require('nconf');

var User           = require('mongoose').model('user');

// End of dependencies.


module.exports = function(req, res, next) {
  var user = new User({ username: req.body.email, password: req.body.password});
  user.save(function(err) {
    return err
      ? next(err)
      : req.login(user, function(err) {
        return err
          ? next(err)
          : res.redirect('/private');
      });
  });
};