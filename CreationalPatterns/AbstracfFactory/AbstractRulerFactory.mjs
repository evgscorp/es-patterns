import {AbstractRuler} from './AbstractRuler.mjs';
export class AbstractRulerFactory {

    /**
     * @returns {AbstractRuler}
     * @memberof AbstractRulerFactory
     */
    getKing() {
      return new AbstractRuler(5,10,'the king');  
    }

    /**
     * @returns {AbstractRuler}
     * @memberof AbstractRulerFactory
     */
    getHandOfTheKing() {
        return new  AbstractRuler(10,5,'the hand of king');  
    }
}