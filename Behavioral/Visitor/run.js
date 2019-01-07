// Initialize ts support
'use strict';
require('typescript-require');
const {Knight} = require("./src/Knight.class.ts");
const {Archer} = require("./src/Archer.class.ts");
const {NorthVisitor} = require("./src/NorthVisitor.class.ts");


const firstKnight = new Knight('John');
const firstArcher = new Archer('Mike');
const NorthArmyVisitor = new NorthVisitor('Stark Army', true);

firstKnight.visit(NorthArmyVisitor);
firstArcher.visit(NorthArmyVisitor);
NorthArmyVisitor.isWinterComming=false;
firstKnight.visit(NorthArmyVisitor);
firstArcher.visit(NorthArmyVisitor);


