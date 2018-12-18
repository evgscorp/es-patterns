import {AbstractRulerFactory} from 'AbstractRulerFactory.js';
import {KingJoffery} from 'KingJoffery.js';
import {LordTywin} from './LordTywin.js';


class LannisterFactory extends AbstractRulerFactory{
    constructor(){
        super();
    }
    
    getKing() {
        return new KingJoffery();  
      }
  
     getHandOfTheKing() {
          return new  LordTywin();  
     } 
}