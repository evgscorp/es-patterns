"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Archer = /** @class */ (function () {
    function Archer(name) {
        this.name = name;
    }
    Archer.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    Archer.prototype.mobilize = function (armyName) {
        console.log("Archer " + this.name + " just mobilized to " + armyName);
    };
    Archer.prototype.demobilize = function (armyName) {
        console.log("Archer " + this.name + " just retired from " + armyName);
    };
    return Archer;
}());
exports.Archer = Archer;
