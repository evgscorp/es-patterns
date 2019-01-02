'use strict';

const TravelType = require ('./TravelType');
class SeaTravel extends TravelType{
    constructor(){
        super(10, 0.2, 400)
    }
}

class HorseTravel extends TravelType{
    constructor(){
        super(30, 0.2, 100)
    }
}

class WalkTravel extends TravelType{
    constructor(){
        super(90, 0.45, 0)
    }
}

module.exports = {SeaTravel, HorseTravel, WalkTravel}