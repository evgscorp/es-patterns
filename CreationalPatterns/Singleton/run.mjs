'use strict';
import {Westeros} from './Westeros.mjs';
import {Wall} from './Wall.mjs';
let WesterosInst = new Westeros();
WesterosInst.Wall.getStatus();
WesterosInst.Wall.setHeight(250);
WesterosInst.Wall.getStatus();

let WesterosInst2 = new Westeros();
WesterosInst2.Wall.getStatus();
WesterosInst.Wall.getStatus();
Wall._instance.getStatus();

