'use strict';
const {SeaTravel,HorseTravel,WalkTravel} = require('./Travels');
class FastStrategy {
    constructor(amount, isnobleman = false){
        this.amount = amount;
        this.isnobleman = isnobleman;
    }

    Travel(){
        if (this.amount > (new SeaTravel()).cost) return new SeaTravel();
         else if (this.amount >(new HorseTravel()).cost) return new HorseTravel();
          else if (this.isnobleman) throw new Error('not enought money');
           else return new WalkTravel();
    }
}

module.exports = FastStrategy;