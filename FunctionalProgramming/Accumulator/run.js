'use strict';
let peasants = [
    {name: "Jory Cassel", taxesOwed: 11, bankBalance: 50},
    {name: "VardisEgen", taxesOwed: 15, bankBalance: 20}];

 const calculation = {collect: function (items, balance, taxes){
    balance += items[0].bankBalance;
    taxes += items[0].taxesOwed;
    if (items.length> 1){
        this.collect(items.slice(1),balance, taxes)
    } else {
        console.log(`balance=${balance}; taxes=${taxes};`);
    } 
 }};

calculation.collect(peasants,0,0);
 