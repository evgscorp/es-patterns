'use strict';
const Command = require('./Command.interface');
const Troop = require('./Troop.interface');
class SendTroops extends Command{
    /**
     *Creates an instance of SendTroops.
     * @param {Troop} troop
     * @param {number} num
     * @param {string} destination
     * @memberof SendTroops
     */
    constructor(troop,num,destination){
        super();
        this.troop = troop;
        this.destination=destination;
        this.num=num;
    }

    Execute(){
        this.troop.send(this.num, this.destination);
    }

}

module.exports = SendTroops;