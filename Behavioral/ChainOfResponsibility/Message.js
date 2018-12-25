'use strict';
var Message = function(importanceLevel, message, isPublic){
    this.importanceLevel = importanceLevel;
    this.message = message;
    this.isPublic = isPublic;
} 
module.exports = Message;