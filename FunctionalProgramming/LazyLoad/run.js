'use strict';
const Bakery = require('./Bakery.class');
var localBakery = new Bakery('French Bakery');
localBakery.addOrder('black bread');
localBakery.addOrder('grey bread');
localBakery.addOrder('white bread');

console.log(localBakery.orders);
console.log(localBakery.takeOrder('grey bread'));
console.log(localBakery.orders);