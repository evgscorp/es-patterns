import {Visitor} from "./visitor.interface";
export class Knight {
   constructor(private name:string){}

    visit(visitor:Visitor):void{
       visitor.visit(this);
    }

    join(armyName:string):void{
        console.log( `Knight ${this.name} just joined to ${armyName}`);
    }
    
    retire(armyName:string):void{
        console.log( `Knight ${this.name} just retired from ${armyName}`)
    }
   
    
}