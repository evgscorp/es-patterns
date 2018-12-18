import {AbstractBuilder} from './AbstractBuilder.mjs';
import {TournamentEvent} from './TournamentEvent.mjs';
import {Tournament} from './Tournament.mjs';
import {Prize} from './Prize.mjs';
import {Attendee} from './Attendee.mjs';

export class BaratheonTournamentBuilder extends AbstractBuilder {
    build() {
        let tournament = new Tournament("BaratheonTournament");
        tournament.Events.push(new TournamentEvent("Joust"));
        tournament.Events.push(new TournamentEvent("Melee"));
        tournament.attendees.push(new Attendee("Stannis"));
        tournament.attendees.push(new Attendee("Robert"));
        return tournament;
    }
}