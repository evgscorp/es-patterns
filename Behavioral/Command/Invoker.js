'use strict';
const Command = require('../Command/Command.interface');

class Invoker{
    constructor(){
      /**@type {Command[]}*/  
      this.commands = [];  
    }
     runTroops(){
        for (const command of this.commands) {
            command.Execute();
        }
    } 
}

module.exports = Invoker;