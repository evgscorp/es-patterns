'use strict';
const Troop = require('./Troop.interface');
class SouthCavalry extends Troop{
    send(num, destination){
        console.log(`${num} horses of SouthCavalry just sent to ${destination}`)
    }
    getBack(num, destination){
        console.log(`${num} horses of SouthCavalry just resturned from ${destination}`)
    }
}

module.exports = SouthCavalry;