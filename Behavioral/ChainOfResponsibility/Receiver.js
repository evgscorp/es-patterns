'use strict';
var Message = require('./Message');
/** @abstract */
var Receiver = function (name) {
    this.name = name;
    this.accessLevel = 1;
}

/** @param {Message} message */
Receiver.prototype.canRead = function (message) {
    return (message.importanceLevel <= this.accessLevel || message.isPublic)
}

/** @param {Message} message */
Receiver.prototype.readMessage = function (message) {
    if (this.canRead(message)) console.log('Reciever "'+this.name+'" just read the message "'+message.message+'"');
    else console.log('Reciever "'+this.name+'" can\'t read the message');
}
 module.exports = Receiver;