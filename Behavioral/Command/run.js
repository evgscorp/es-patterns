'use strict';
const SouthCavalry = require('./SouthCavalry');
const SendTroops = require('./SendTroops');
const GetTroopsBack = require('./GetTroopsBack');

var test ={commands:[]};
test.SouthCavalry = new SouthCavalry();
test.commands.push(new SendTroops(test.SouthCavalry, 50, "North"));
test.commands.push(new GetTroopsBack(test.SouthCavalry, 30, "North"));
test.commands.push(new SendTroops(test.SouthCavalry, 20, "Red Castle"));

for (const command of test.commands) {
    command.Execute();
}