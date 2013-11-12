'use strict';

/**
 * Module dependencies.
 */
var log                      = require('winston-wrapper')(module);
var config                   = require('nconf');

var requireTree              = require('require-tree');
var controllers              = requireTree('../controllers');
var mustAuthenticatedMw      = require('../middlewares/must-authenticated');  

// End of dependencies.


module.exports = function(app) {
  
  // Only for registred users
  app.all('/private',        mustAuthenticatedMw);
  app.all('/private/*',      mustAuthenticatedMw);


  // Basic routes
  app.get('/',               controllers.render('public'));
  app.get('/private',        controllers.render('private'));
  app.get('/fail',           controllers.render('fail'));


  // Auth controllers
  app.post('/login',         controllers.users.login);
  app.post('/register',      controllers.users.register);
  app.get('/logout',         controllers.users.logout);

};