export class AbstractHero {
     /**
     * @param {number} strength
     * @param {number} intellect
     * @param {number} vitality
     * @param {string} name
     */
    constructor(strength, intellect, vitality, name) {
        this.strength = strength;
        this.intellect = intellect;
        this.vitality = vitality;
        this.name = name;
       
    }
     /**
     * @return {number}
     */
    attack(){
      throw "method 'attack' is not overrided!";
    }
     /**
     * @return {number}
     */

    deffence(){
      throw "method 'deffence' is not overrided!";
     }
 

}

