'use strict';
class Beer {
    Create() {
        this.AddIngredients();
        this.Stir();
        this.Ferment();
    }

    AddIngredients() {
        throw new Error('not implemented');
    }

    Stir() {
        throw new Error('not implemented');
    }

    Ferment() {
        throw new Error('not implemented');
    }

}

module.exports = Beer;