import {Visitor} from "./visitor.interface";
export class Archer {
   constructor(private name:string){}

    visit(visitor:Visitor):void{
       visitor.visit(this);
    }

   mobilize(armyName:string):void{
        console.log( `Archer ${this.name} just mobilized to ${armyName}`);
    }
    
    demobilize(armyName:string):void{
        console.log( `Archer ${this.name} just retired from ${armyName}`)
    }
   
    
}