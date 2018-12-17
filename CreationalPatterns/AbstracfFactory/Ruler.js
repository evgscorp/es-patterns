class Ruler {
    constructor(agression, wisdom, name) {
        this.agression = agression;
        this.wisdom = wisdom;
        this.nane = name;
    }

    makeDecision(){
       if ((Number.parseInt(this.agression)-Number.parseInt(this.wisdom)-1)>0){
          return "kill!";  
       } else return "let out!"
    }

    marry(){
        if ((Number.parseInt(this.agression)-Number.parseInt(this.wisdom)-1)>0){
           return "never!";  
        } else return "soon!"
     }
 

}