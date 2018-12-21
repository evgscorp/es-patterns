export class AbstractAdapter{
    constructor(name){
        this.name = name;
    }

    BattleWithRouge(){
       throw new Error('BattleWithRouge implementation required');  
    }

    BattleWithKnight(){
        throw new Error('BattleWithKnight implementation required');  
    }
}