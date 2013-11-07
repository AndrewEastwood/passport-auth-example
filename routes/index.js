'use strict';

/**
 * Module dependencies.
 */
var log = require('../lib/utils').log(module);
var config = require('../lib/utils').config;
var requireTree    = require('require-tree');
var controllers    = requireTree('../controllers');
var mustAuthenticatedMw = require('../middlewares/must-authenticated');  

// End of dependencies.


module.exports = function(app) {
  
  // Only for registred users
  app.all('/private',       mustAuthenticatedMw);
  app.all('/private/*',      mustAuthenticatedMw);


  // Basic routes
  app.get('/',               function(req, res) { res.render('public'); });
  app.get('/private',        function(req, res) { res.render('private'); });
  app.get('/fail',           function(req, res) { res.render('fail'); });


  // Auth controllers
  app.post('/login', controllers.users.login);
  app.post('/register', controllers.users.register);
  app.get('/logout', controllers.users.logout);

};