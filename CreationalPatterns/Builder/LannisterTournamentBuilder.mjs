import {AbstractBuilder} from './AbstractBuilder.mjs';
import {TournamentEvent} from './TournamentEvent.mjs';
import {Tournament} from './Tournament.mjs';
import {Prize} from './Prize.mjs';
import {Attendee} from './Attendee.mjs';

export class LannisterTournamentBuilder extends AbstractBuilder {
    build() {
        let tournament = new Tournament("Lannister Tournament");
        tournament.Events.push(new TournamentEvent("Joust"));
        tournament.Events.push(new TournamentEvent("Melee"));
        tournament.Attendees.push(new Attendee("Jamie"));
        tournament.Prizes.push(new Prize("Gold"));
        tournament.Prizes.push(new Prize("More Gold"));
        return tournament;
    }
}