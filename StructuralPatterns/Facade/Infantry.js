'use strict';
var Division = require('./Division');
var Infantry = function(name,count){
    Division.call(this, name, count);
    this.shieldsStatus = 'down';
    this.lanceStatus = "up";
}

Infantry.prototype = Object.create(Division.prototype);

Infantry.prototype.shieldsMove = function(position){
    this.shieldsStatus = position;
    console.log('Infantry Division "'+this.name+'"'+' SHIELDS '+this.shieldsStatus.toUpperCase()+'!');
}

Infantry.prototype.lancesMove = function(position){
    this.lanceStatus = position;
    console.log('Infantry Division "'+this.name+'"'+' LANCES '+this.lanceStatus.toUpperCase()+'!');
}

module.exports = Infantry;