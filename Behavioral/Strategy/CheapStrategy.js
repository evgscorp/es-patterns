'use strict';
const {SeaTravel,HorseTravel,WalkTravel} = require('./Travels');
class CheapStrategy {
    constructor(amount, isnobleman = false){
        this.amount = amount;
        this.isnobleman = isnobleman;
    }

    Travel(){
         if (this.isnobleman&&this.amount >(new HorseTravel()).cost) return new HorseTravel();
          else if (this.isnobleman) throw new Error('not enought money');
           else return new WalkTravel();
    }
}

module.exports = CheapStrategy;
