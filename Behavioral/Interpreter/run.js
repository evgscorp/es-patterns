'use strict';
const BattleInterpreter = require('./BattleInterpreter');

let text = 'Robert Baratheon -> River Trident <-RhaegarTargaryen -> Robert Baratheon';
const Battle = new BattleInterpreter();
console.log(Battle.interpreteBattle(text));