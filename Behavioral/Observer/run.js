'use strict';
const Spy = require('./Spy');
const Player = require('./Player');

const KingSpy = new Spy();
const EddardStark = new Player('Eddard Stark');
const PetyrBaelish = new Player('Petyr Baelish');
const Varys = new Player('Varys');

KingSpy.subscribe(EddardStark);
KingSpy.subscribe(PetyrBaelish);
KingSpy.subscribe(Varys);

KingSpy.snitch('King is hurted');
KingSpy.snitch('King takes painkillers pills');
KingSpy.snitch('King dies');
KingSpy.unsubscribe(EddardStark);
console.log(KingSpy.subscribers);
KingSpy.missionComplete();