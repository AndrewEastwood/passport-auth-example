'use strict';

/**
 * Module dependencies.
 */

var log            = require('./lib/utils').log(module, 'You are Welcome!');
var config         = require('./lib/utils').config;
var express        = require('express');
var loggerMw       = require('./middlewares/express-logger');

var requireTree    = require('require-tree');
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var bootable       = require('bootable');



var app = bootable(express());

app.phase(bootable.initializers('./setup/initializers'));

app.phase(function(){
  log.info('Setup Environment');
  require('./setup/environments/').all(app);
});



app.phase(function(){
  log.info('Setup Routes');
  require('./routes')(app);
});



app.boot(function(err) {
  if (err) { throw err; }
  app.listen(config.get('express:port'), function() {
    log.info('Express listen port', config.get('express:port'));
  });
});