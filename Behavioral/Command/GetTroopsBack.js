'use strict';
const Command = require('./Command.interface');
const Troop = require('./Troop.interface');
class GetTroopsBack extends Command{
    /**
     *Creates an instance of GetTroopsBack.
     * @param {Troop} troop
     * @param {number} num
     * @param {string} destination
     * @memberof GetTroopsBack
     */
    constructor(troop,num,destination){
        super();
        this.troop = troop;
        this.destination=destination;
        this.num=num;
    }

    Execute(){
        this.troop.getBack(this.num, this.destination);
    }

}

module.exports = GetTroopsBack;