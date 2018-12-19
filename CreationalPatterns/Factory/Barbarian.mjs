import {AbstractHero} from './AbstractHero.mjs';
export class Barbarian extends AbstractHero{
     /**
     * @param {number} strength
     * @param {number} intellect
     * @param {number} vitality
     * @param {string} name
     */
    constructor(strength, intellect, vitality, name) {
        super(strength, intellect, vitality, name);
       
    }
     /**
     * @return {number}
     */
    attack(){
      return this.strength*1.5+this.intellect*0.2;
    }
     /**
     * @return {number}
     */

    deffence(){
      return this.vitality*0.8+this.strength*0.2+this.intellect*0.1;
     }
 

}

