'use strict';
const FastStrategy =  require('./FastStrategy');
const CheapStrategy =  require('./CheapStrategy');

const persons = [{
        amount: 1000,
        noble:  true,
        adventurous: true,
        name: "Jaime Lannister"
    }, {
        amount: 300,
        noble:  true,
        adventurous: false,
        name: "Tyrion Lannister"
    },
    {
        amount: 2000,
        noble: true,
        adventurous: false,
        name: "Cersei Lannister"
    },
    {
        amount: 0,
        noble: false,
        adventurous: true,
        name: "Ygritte"
    }

]

for (const person of persons) {
    console.log(`person "${person.name}" travels by `);
    if(person.adventurous) console.log((new FastStrategy(person.amount, person.noble)).Travel());
     else  console.log((new CheapStrategy(person.amount, person.noble)).Travel());
    }
