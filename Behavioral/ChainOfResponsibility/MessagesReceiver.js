'use strict';
var Message = require('./Message');
var MessagesReceiver = function(){
    this.receivers = [];
} 

/** @param {Message} message*/
MessagesReceiver.prototype.sendMessage=function(message){
        this.receivers.forEach(function(receiver){
        if (receiver.canRead(message)) {
            receiver.readMessage(message);
            if (!message.isPublic) return true;       
        }
        
    });
}

module.exports = MessagesReceiver;