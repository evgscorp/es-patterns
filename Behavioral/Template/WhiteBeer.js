'use strict';
const Beer = require('./Beer.abstract');

class WhiteBeer extends Beer{
    AddIngredients(){
        console.log('WhiteBeer ingredients just added');
    }

    Ferment(){
        console.log('WhiteBeer just fermented');
    }

    Stir(){
        console.log('WhiteBeer just stirred');
    }
}

module.exports = WhiteBeer;