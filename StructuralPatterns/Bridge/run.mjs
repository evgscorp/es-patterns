'use strict';
import {MeleeWarriorAdapter} from './MeleeWarriorAdapter.mjs';
import {ArcherAdapter} from './ArcherAdapter.mjs';

let warriors = [];
warriors.push(new MeleeWarriorAdapter("Melee"));
warriors.push(new ArcherAdapter("Archer"));

warriors.forEach(warrior => {
    console.log(`\n ${warrior.name} Fight with the bandit:\n`);
    warrior.BattleWithRouge();
    console.log(`\n ${warrior.name} Fight with the knight:\n`);
    warrior.BattleWithKnight();
});
