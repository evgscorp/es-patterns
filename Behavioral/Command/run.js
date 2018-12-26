'use strict';
const SouthCavalry = require('../Command/SouthCavalry');
const SendTroops = require('../Command/SendTroops');
const GetTroopsBack = require('../Command/GetTroopsBack');
const Invoker = require('./Invoker');


const troopsInvoker = new Invoker();
const southCavalry = new SouthCavalry();
troopsInvoker.commands.push(new SendTroops(southCavalry, 50, "North"));
troopsInvoker.commands.push(new GetTroopsBack(southCavalry, 30, "North"));
troopsInvoker.commands.push(new SendTroops(southCavalry, 20, "Red Castle"));
troopsInvoker.runTroops();