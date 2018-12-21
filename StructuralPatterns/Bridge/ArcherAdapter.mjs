import {Archer} from './Archer.mjs';
import {AbstractAdapter} from './AbstractAdapter.mjs';
export class ArcherAdapter extends AbstractAdapter{
    constructor(){
        super();
        this._warrior= new Archer();
    }

    BattleWithRouge(){
        this._warrior.Charge();
        this._warrior.StepBack();
        this._warrior.fire();
        this._warrior.KnifeHit();
    }

    BattleWithKnight(){
        this._warrior.Charge();
        this._warrior.StepBack();
        this._warrior.fire();
        this._warrior.Dodge();
        this._warrior.StepBack();
        this._warrior.KnifeThrow();
        this._warrior.Dodge();
        this._warrior.KnifeBlock();
        this._warrior.Dodge();
        this._warrior.KnifeHit();
        this._warrior.StepBack();
        this._warrior.StepBack();
        this._warrior.Charge();
        this._warrior.fire();
        this._warrior.StepBack();
        this._warrior.Charge();
        this._warrior.fire();
        this._warrior.Charge();
        this._warrior.fire();
        this._warrior.KnifeThrow();
        this._warrior.Dodge();
        this._warrior.KnifeHit();
        this._warrior.Dodge();
        this._warrior.KnifeHit();
        this._warrior.Dodge();
        this._warrior.KnifeHit();
        this._warrior.KnifeHit();
        this._warrior.KnifeHit();
       
    }

}