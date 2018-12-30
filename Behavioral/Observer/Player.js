'use strict';
const Observer = require('./Observer.interface');
class Player extends Observer{
    constructor(name){
       super(); 
      this.name = name;  
    }

    Next(message){
        console.log(this.name, 'get the message "',message,'"');
    }

    complete(){
        console.log(this.name, ' is done here');
    }

}
module.exports = Player;