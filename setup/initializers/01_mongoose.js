// Any files in this directory will be `require()`'ed when the application
// starts, and the exported function will be invoked with a `this` context of
// the application itself.  Initializers are used to connect to databases and
// message queues, and configure sub-systems such as authentication.

// Async initializers are declared by exporting `function(done) { /*...*/ }`.
// `done` is a callback which must be invoked when the initializer is
// finished.  Initializers are invoked sequentially, ensuring that the
// previous one has completed before the next one executes.


'use strict';

var mongoose       = require('mongoose');
var log            = require('../../lib/utils').log(module);
var config         = require('../../lib/utils').config;
var requireTree    = require('require-tree');
var models         = requireTree('../../models/');


module.exports = function(done) {

  mongoose.connection.on('open', function() {
    log.info('Connected to mongo server!'.green);
    return done();
  });

  mongoose.connection.on('error', function(err) {
    log.error('Could not connect to mongo server!');
    log.error(err.message);
    done();
    return err;
  });

  try {
    mongoose.connect(config.get('mongoose:db'));
    mongoose.connection;
    log.info('Started connection on ' + (config.get('mongoose:db')).cyan + ', waiting for it to open...'.grey);
  } catch (err) {
    log.error(('Setting up failed to connect to ' + config.get('mongoose:db')).red, err.message);
  }

};