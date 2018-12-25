'use strict';
var MessagesReceiver = require('./MessagesReceiver');
var Message = require('./Message');
var Clerk = require('./Clerk');
var Judge = require('./Judge');


var publicMessage = new Message(1,"to all message", true);
var privateMessage = new Message(10,"to Judge message", false);
var court = {};
court.MessagesReceiver= new MessagesReceiver();
court.MessagesReceiver.receivers.push(new Clerk('John'));
court.MessagesReceiver.receivers.push(new Judge('Snow'));
court.MessagesReceiver.sendMessage(publicMessage);
court.MessagesReceiver.sendMessage(privateMessage);
