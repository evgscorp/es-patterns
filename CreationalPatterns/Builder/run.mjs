'use strict';
import {BaratheonTournamentBuilder} from './BaratheonTournamentBuilder.mjs';
import {LannisterTournamentBuilder} from './LannisterTournamentBuilder.mjs';

let tournament1 = new BaratheonTournamentBuilder().build();
let tournament2 = new LannisterTournamentBuilder().build();

console.log(tournament1);
console.log(tournament2.name, tournament2.Events, tournament2.Attendees, tournament2.Prizes);
console.log(tournament1.name, tournament1.Events, tournament1.Attendees, tournament1.Prizes);
