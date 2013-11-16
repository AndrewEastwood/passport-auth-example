'use strict';

/**
 * Module dependencies.
 */

var log            = require('winston-wrapper')(module);
var config         = require('nconf');

var express        = require('express');
var bootable       = require('bootable');
var bootableEnv    = require('bootable-environment');

// End of dependencies.


var app = bootable(express());

// Setup initializers
app.phase(bootable.initializers('setup/initializers/'));

// Setup environments
app.phase(bootableEnv('setup/environments/', app));

// Setup routes
app.phase(bootable.routes('routes/', app));

// Boot app
app.boot(function(err) {
  if (err) { throw err; }
  app.listen(config.get('express:port'), function() {
    log.info('Express listen port', config.get('express:port'));
  });
});