"use strict";
var Knight_class_1 = require("./Knight.class");
var Archer_class_1 = require("./Archer.class");
var NorthVisitor = (function () {
    function NorthVisitor(army, warStatus) {
        if (warStatus === void 0) { warStatus = true; }
        this.army = army;
        this.warStatus = warStatus;
    }
    NorthVisitor.prototype.visit = function (man) {
        if (this.warStatus) {
            this.gathering(man);
        }
        else {
            this.retiring(man);
        }
    };
    NorthVisitor.prototype.gathering = function (man) {
        console.log("gathering " + typeof man);
        if (man instanceof Knight_class_1.Knight)
            man.join(this.army);
        else if (man instanceof Archer_class_1.Archer)
            man.mobilize(this.army);
    };
    NorthVisitor.prototype.retiring = function (man) {
        console.log("retiring " + typeof man);
        if (man instanceof Knight_class_1.Knight)
            man.retire(this.army);
        else if (man instanceof Archer_class_1.Archer)
            man.demobilize(this.army);
    };
    Object.defineProperty(NorthVisitor.prototype, "isWinterComming", {
        set: function (val) {
            this.warStatus = val;
        },
        enumerable: true,
        configurable: true
    });
    return NorthVisitor;
}());
exports.NorthVisitor = NorthVisitor;
