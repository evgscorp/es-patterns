import {AbstractRulerFactory} from 'AbstractRulerFactory.js';
import {KingJoffery} from 'KingJoffery.js';
import {LordTywin} from './LordTywin.js';


export class LannisterFactory extends AbstractRulerFactory{
    constructor(){
        super();
    }
    /**
     * @returns {AbstractRuler}
     * @memberof LannisterFactory
     */
    getKing() {
        return new KingJoffery();  
      }
      
     /**
     * @returns {AbstractRuler}
     * @memberof LannisterFactory
     */ 
     getHandOfTheKing() {
          return new  LordTywin();  
     } 
}