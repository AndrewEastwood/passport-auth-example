(function () {
  'use strict';

  var log4js = require('log4js');
  var log = log4js.getLogger();
  var mongoose = require('mongoose');


  // TODO: need a more safety

  /**
   * @class UserSchema
   */
  var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  });

  mongoose.model('user', UserSchema);

})();
