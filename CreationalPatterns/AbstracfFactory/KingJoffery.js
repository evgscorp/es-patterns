import {Ruler} from 'AbstractRuler.js';
export class KingJoffery extends Ruler {
    constructor() {
        super(10, 3, 'Joffery');
    }

      /**
     * @param {number} moodLevel
     * @return {boolean}
     */
    killSomebody(moodLevel){
        if (moodLevel<80) return true;
    }
}