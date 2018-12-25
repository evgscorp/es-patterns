'use strict';
var Receiver = require('./Receiver');
var Judge  = function(name){
  this.name=String.prototype.concat('Judge ',name);
  this.accessLevel = 10;
}
Judge.prototype=Object.create(Receiver.prototype);
module.exports = Judge;