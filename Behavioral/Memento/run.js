'use strict';
const CareTakerWesteros = require('./CareTakerWesteros');

const clientWesteros = new  CareTakerWesteros(1, 'Robert Baratheon', 1);
console.log(clientWesteros.state);
clientWesteros.updateSeason(2);
clientWesteros.updateNumberOfKings(4);
clientWesteros.updateCurrentKingInKingsLanding('King Joffrey Baratheon');
console.log(clientWesteros.state);
clientWesteros.rollBack();
console.log(clientWesteros.state);
clientWesteros.rollBack();
console.log(clientWesteros.state);
clientWesteros.rollBack();
console.log(clientWesteros.state);


