import {Ruler} from 'Ruler.js';
class KingJoffery extends Ruler {
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