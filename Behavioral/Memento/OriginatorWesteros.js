'use strict';
const MementoWesteros = require('./MementoWesteros');
class OriginatorWesteros {
    constructor(numberOfKings, currentKingInKingsLanding, season) {
        this.numberOfKings = numberOfKings;
        this.currentKingInKingsLanding = currentKingInKingsLanding;
        this.season = season;
    }

    saveNewMemento() {
        return new MementoWesteros(this.numberOfKings, this.currentKingInKingsLanding, this.season);
    }

    undoMemento(memento) {
        this.numberOfKings = memento.numberOfKings;
        this.currentKingInKingsLanding = memento.currentKingInKingsLanding;
        this.season = memento.season;
    }
}
module.exports = OriginatorWesteros;