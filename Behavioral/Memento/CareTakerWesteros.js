'use strict';
const OriginatorWesteros = require('./OriginatorWesteros');
class CareTakerWesteros {
    constructor(numberOfKings, currentKingInKingsLanding, season) {
        this.state = new OriginatorWesteros(numberOfKings, currentKingInKingsLanding, season);
        this.mementos = [];
    }

    updateNumberOfKings(numberOfKings) {
        this.mementos.push(this.state.saveNewMemento());
        this.state.numberOfKings = numberOfKings;

    }

    updateCurrentKingInKingsLanding(currentKingInKingsLanding) {
        this.mementos.push(this.state.saveNewMemento());
        this.state.currentKingInKingsLanding = currentKingInKingsLanding;
    }

    updateSeason(season) {
        this.mementos.push(this.state.saveNewMemento());
        this.state.season = season;
    }

    rollBack() {
        if (this.mementos.length > 0)
            this.state.undoMemento(this.mementos.pop());
    }
}

module.exports = CareTakerWesteros;