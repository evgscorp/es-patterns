'use strict';
var Division = require('./Division');
var Archers = function(name,count){
    Division.call(this, name, count);
    this.bowStatus = 'standby';
}

Archers.prototype = Object.create(Division.prototype);

Archers.prototype.bowAction = function(action){
    this.bowStatus = action;
    console.log('Archers Division "'+this.name+'"'+' bows '+this.bowStatus.toUpperCase()+'!');
}

module.exports = Archers;