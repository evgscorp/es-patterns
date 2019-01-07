import { Visitor } from "./visitor.interface";
import { Knight } from "./Knight.class";
import {Archer} from "./Archer.class";

export class NorthVisitor implements Visitor {
    constructor(private army: string, private warStatus: boolean = true) { }
    visit(man: any) {
        if (this.warStatus) {
            this.gathering(man);
        } else { this.retiring(man); }
    }

    private gathering(man: any) {
        console.log(`gathering ${typeof man}`)
        if (man instanceof Knight) man.join(this.army);
        else if(man instanceof Archer) man.mobilize(this.army);
    }

    private retiring(man: any) {
        console.log(`retiring ${typeof man}`)
        if (man instanceof Knight) man.retire(this.army);
        else if(man instanceof Archer) man.demobilize(this.army);

    }

    set isWinterComming(val: boolean) {
        this.warStatus = val;
    }
}