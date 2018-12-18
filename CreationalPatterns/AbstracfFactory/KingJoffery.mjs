import {AbstractRuler} from './AbstractRuler.mjs';
export class KingJoffery extends AbstractRuler {
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