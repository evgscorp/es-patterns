'use strict';
import {Knight} from "./Knight.class";
import{Archer}  from "./Archer.class";
import{NorthVisitor}  from "./NorthVisitor.class";


const firstKnight = new Knight('John');
const firstArcher = new Archer('Mike');
const NorthArmyVisitor = new NorthVisitor('Stark Army', true);

firstKnight.visit(NorthArmyVisitor);
firstArcher.visit(NorthArmyVisitor);
NorthArmyVisitor.isWinterComming=false;
firstKnight.visit(NorthArmyVisitor);
firstArcher.visit(NorthArmyVisitor);


