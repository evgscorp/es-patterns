var Infantry = require('./Infantry');
var Archers = require('./Archers');
var Army = require('./Army');

var NorthArmy = new Army('North Army');
NorthArmy.addInfantryDivision(new Infantry('First melee', 1100));
NorthArmy.addInfantryDivision(new Infantry('Second melee', 900));
NorthArmy.addArchersDivision(new Archers('Bowmen', 420));
NorthArmy.addArchersDivision(new Archers('Arbalester', 870));
NorthArmy.battlePosition();
NorthArmy.attack();
console.log(NorthArmy);

