'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Knight_class_1 = require("./Knight.class");
var Archer_class_1 = require("./Archer.class");
var NorthVisitor_class_1 = require("./NorthVisitor.class");
var firstKnight = new Knight_class_1.Knight('John');
var firstArcher = new Archer_class_1.Archer('Mike');
var NorthArmyVisitor = new NorthVisitor_class_1.NorthVisitor('Stark Army', true);
firstKnight.visit(NorthArmyVisitor);
firstArcher.visit(NorthArmyVisitor);
NorthArmyVisitor.isWinterComming = false;
firstKnight.visit(NorthArmyVisitor);
firstArcher.visit(NorthArmyVisitor);