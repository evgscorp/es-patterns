'use strict';
var Receiver = require('./Receiver');
var Clerk  = function(name){
   // Function.call(this,String.prototype.concat('Clerk ',name));
   this.name=String.prototype.concat('Clerk ',name);
}
Clerk.prototype=Object.create(Receiver.prototype);
module.exports = Clerk;