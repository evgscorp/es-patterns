import {Ruler} from 'Ruler.js';
class LordTywin extends Ruler {
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