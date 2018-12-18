import {AbstractRuler} from './AbstractRuler.mjs';
export class LordTywin extends AbstractRuler {
    constructor() {
        super(2, 10, 'Lord Tywin');
    }

    /**
     * @param {number} risk
     * @return {boolean}
     */
    runAway(risk){
        if (risk>30) return true;
    }
}