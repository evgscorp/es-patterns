'use strict';
/** @interface */
class Troop {
    send(){
        throw new Error('not implemented')
    }
    getBack(){
        throw new Error('not implemented')
    }
}

module.exports = Troop;