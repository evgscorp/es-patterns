"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knight = /** @class */ (function () {
    function Knight(name) {
        this.name = name;
    }
    Knight.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    Knight.prototype.join = function (armyName) {
        console.log("Knight " + this.name + " just joined to " + armyName);
    };
    Knight.prototype.retire = function (armyName) {
        console.log("Knight " + this.name + " just retired from " + armyName);
    };
    return Knight;
}());
exports.Knight = Knight;
