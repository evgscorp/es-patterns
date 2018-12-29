'use strict';
const KingSuccession = require('./KingSuccession');
const king = new KingSuccession(["Robert Baratheon","JofferyBaratheon", "TommenBaratheon"]);
console.log(king.CurrentSuccessor); //'Robert Baratheon'
console.log(king.Next()); //'JofferyBaratheon'
console.log(king.Next()); //'JofferyBaratheon'
