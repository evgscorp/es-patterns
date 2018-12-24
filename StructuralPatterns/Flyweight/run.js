'use strict';
const Soldier = require('./Soldier');

let LightweightSoldier = function(){};
LightweightSoldier.prototype=new Soldier();

let soldiers = [];
soldiers.push(new LightweightSoldier());
soldiers.push(new LightweightSoldier());


console.log(soldiers[0].strength,soldiers[1].strength); 
soldiers[0].strength = 9;
console.log(soldiers);
console.log(soldiers[0].strength,soldiers[1].strength); 
delete soldiers[0].strength;
console.log(soldiers[0].strength,soldiers[1].strength); 