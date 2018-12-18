export class AbstractRuler {
     /**
     * @param {number} agression
     * @param {number} wisdom
     * @param {name} name
     */
    constructor(agression, wisdom, name) {
        this.agression = agression;
        this.wisdom = wisdom;
        this.name = name;
    }
     /**
     * @return {sring}
     */
    makeDecision(){
       if ((Number.parseInt(this.agression)-Number.parseInt(this.wisdom)-1)>0){
          return `${this.name}: kill!`;  
       } else return `${this.name}: let him out!`;
    }
     /**
     * @return {string}
     */
    marry(){
        if ((Number.parseInt(this.agression)-Number.parseInt(this.wisdom)-1)>0){
           return `${this.name}: never!`;  
        } else return `${this.name}: soon!`
     }
 

}

