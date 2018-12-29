'use strict';
class House {
    constructor(name, mediator) {
        this.name = name;
        this.HouseMediator = mediator;
    }
    send(message, to = null) {
        this.HouseMediator.processMessage(message, to, this);
    }

    recieve(message, house) {
        console.log(this.name, 'get message: "', message, '" from ', house.name);
    }
}
module.exports = House;