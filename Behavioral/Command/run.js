'use strict';
const SouthCavalry = require('./SouthCavalry');
const SendTroops = require('./SendTroops');
const GetTroopsBack = require('./GetTroopsBack');
const Invoker = require('./Invoker');


const troopsInvoker = new Invoker();
const southCavalry = new SouthCavalry();
troopsInvoker.commands.push(new SendTroops(southCavalry, 50, "North"));
troopsInvoker.commands.push(new GetTroopsBack(southCavalry, 30, "North"));
troopsInvoker.commands.push(new SendTroops(southCavalry, 20, "Red Castle"));
troopsInvoker.runTroops();