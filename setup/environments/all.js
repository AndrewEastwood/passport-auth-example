'use strict';

/**
 * Module dependencies.
 */
var log            = require('winston-wrapper')(module);
var config         = require('nconf');

var express        = require('express');
var expressLogger  = require('../../middlewares/express-logger');
var passport       = require('passport');
var rootDir        = process.env.PWD;

// end of dependencies.


module.exports = function() {
  this.set('views', rootDir + '/views');
  this.set('view engine', 'jade');
  this.use(express.favicon());
  this.use(expressLogger);
  this.use(express.cookieParser());
  this.use(express.bodyParser());
  this.use(express.session({ secret: 'SECRET' }));
  this.use(express.methodOverride());
  this.use(passport.initialize());
  this.use(passport.session());
  this.use(this.router);
  this.use(express.static(rootDir, '/public'));
  this.use(express.errorHandler());
};


