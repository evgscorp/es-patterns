'use strict';
import {Factory} from './Factory.mjs';
let FactoryInst = new Factory();

console.log(FactoryInst.getHero('magic','wizard 1'));
console.log(FactoryInst.getHero('magic','wizard 2'));
console.log(FactoryInst.getHero('strenght','strenght 1'));
