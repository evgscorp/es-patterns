import {Warrior} from './Warrior.mjs';
export class WarriorAdapter {
    constructor(){
        this._warrior= new Warrior();
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