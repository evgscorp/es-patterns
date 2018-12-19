import {AbstractHero} from './AbstractHero.mjs';
export class WizardHero extends AbstractHero{
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
      return this.intellect*0.8+this.strength*0.1;
    }
     /**
     * @return {number}
     */

    deffence(){
      return this.vitality+this.strength*0.5+this.intellect*0.2;
     }
 

}

