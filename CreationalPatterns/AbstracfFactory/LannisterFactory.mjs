import {AbstractRulerFactory} from './AbstractRulerFactory.mjs';
import {KingJoffery} from './KingJoffery.mjs';
import {LordTywin} from './LordTywin.mjs';


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