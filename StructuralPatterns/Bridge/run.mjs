'use strict';
import {MeleeWarriorAdapter} from './MeleeWarriorAdapter.mjs';
import {ArcherAdapter} from './ArcherAdapter.mjs';


let warrior= new MeleeWarriorAdapter();
let archer= new ArcherAdapter();

console.log('\n MeleeWarrior Fight with the bandit:\n');
warrior.BattleWithRouge();
console.log('\n MeleeWarrior Fight with the knight:\n');
warrior.BattleWithKnight();

console.log('\n Archer Fight with the bandit:\n');
archer.BattleWithRouge();
console.log('\n Archer Fight with the knight:\n');
archer.BattleWithKnight();
