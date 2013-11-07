'use strict'; 

/**
 * Module dependencies.
 */
var winston = require('winston');
var nconf = require('nconf');


/**
 * Wrapper for config
 */
nconf.file({'file': __dirname+'/../config.json'});
exports.config = nconf;


/*
 * Advanced logger. 
 * TODO: Можно добавить транспорт «файл», чтобы на живом сохранялись логи
 **/
exports.log = function(module, wellcome) {

  var ENV = process.env.NODE_ENV;
  var path = module.filename.split('/').slice(-2).join('/');

  var log = new winston.Logger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: (ENV === 'development') ? 'debug' : 'error',
        label: path.grey
      })
    ]
  });

  
  // Можно было бы вызывать метод у прототипа. Если бы он был)
  log._error = log.error;
  log.error = function(msg) {
    log._error(msg.red);
  };

  wellcome 
    ? log.info(wellcome)
    : log.info('Init'.green);

  return log;

};