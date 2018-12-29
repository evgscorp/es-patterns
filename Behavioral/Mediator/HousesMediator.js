'use strict';
class HousesMediator {
    constructor() {
        this.houses = [];
    }

    processMessage(message, toHouse, fromHouse) {
        if (toHouse) {
            toHouse.recieve(message, fromHouse);
        } else {
            for (const house of this.houses) {
                if (house!=fromHouse) house.recieve(message, fromHouse);
            }
        }
    }
}
module.exports = HousesMediator;