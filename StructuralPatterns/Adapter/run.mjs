'use strict';
import {WarriorAdapter} from './WarriorAdapter.mjs';

let warrior= new WarriorAdapter();
console.log('\nFight with the bandit:\n');
warrior.BattleWithRouge();
console.log('\nFight with the knight:\n');
warrior.BattleWithKnight();

