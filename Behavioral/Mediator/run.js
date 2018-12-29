'use strict';
const House = require('./House');
const HousesMediator = require('./HousesMediator');
const WinterfellMediator = new HousesMediator();
const northHouses = new Object();
northHouses.karstark = new House('Karstark',WinterfellMediator);
northHouses.bolton = new House('Bolton',WinterfellMediator);
northHouses.frey = new House('Frey',WinterfellMediator);
WinterfellMediator.houses= Object.values(northHouses);

northHouses.karstark.send('hello ALL !');
northHouses.bolton.send('Hi!',northHouses.karstark);
northHouses.frey.send('Where is my money ?', northHouses.karstark);
