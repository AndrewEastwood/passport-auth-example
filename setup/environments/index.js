'use strict';

/**
 * Module dependencies.
 */
var config    = require('../../lib/utils').config;
var log       = require('../../lib/utils').log(module);
var express        = require('express');
var expressLogger  = require('../../middlewares/express-logger');
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var rootDir        = process.env.PWD
// end of dependencies.



exports.all = function(app) {
  app.configure(function() {
    log.info('setup');
    // all environments
    app.set('views', rootDir + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(expressLogger);
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'SECRET' }));
    app.use(express.methodOverride());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(rootDir, '/public'));
    app.use(express.errorHandler());
  });
};