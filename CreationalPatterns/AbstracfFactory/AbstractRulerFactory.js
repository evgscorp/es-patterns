import {AbstractRuler} from 'AbstractRuler.js';
export class AbstractRulerFactory {

    getKing() {
      return new AbstractRuler(5,10,'the king');  
    }

    getHandOfTheKing() {
        return new  AbstractRuler(10,5,'the hand of king');  
    }
}