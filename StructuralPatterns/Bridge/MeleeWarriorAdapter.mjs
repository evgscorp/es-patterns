import {MeleeWarrior} from './MeleeWarrior.mjs';
import {AbstractAdapter} from './AbstractAdapter.mjs';
export class MeleeWarriorAdapter extends AbstractAdapter{
    constructor(name){
        super(name);
        this._warrior= new MeleeWarrior();
    }

    BattleWithRouge(){
        this._warrior.ShildHit();
        this._warrior.QuickSwordHit();
        this._warrior.HardSwordHit();
    }

    BattleWithKnight(){
        this._warrior.Dodge();
        this._warrior.FakeHit();
        this._warrior.Dodge();
        this._warrior.SwordBlock();
        this._warrior.Dodge();
        this._warrior.QuickSwordHit();
        this._warrior.Dodge();
        this._warrior.ShildBlock();
        this._warrior.ShildHit();
        this._warrior.FakeHit();
        this._warrior.Dodge();
        this._warrior.QuickSwordHit();
        this._warrior.HardSwordHit();
    }

}