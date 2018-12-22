'use strict';
const Ingredient = require('./Ingredient'); 
const Dish = require('./Dish'); 

   let cheese = new Ingredient("cheese Mozarella", 155, 6, 0);
   let dought = new Ingredient("Dought", 242, 0, 0);
   let oil = new Ingredient("olive oil", 187, 1,0);
   let tomato = new Ingredient("Tomato", 70, 8, 2);
   let spice = new Ingredient("Spice", 10, 1, 0);
   
   let pizza = new Dish("pizza margherita");
   pizza.AddIngredient(dought);
   pizza.AddIngredient(oil);
   pizza.AddIngredient(tomato);
   pizza.AddIngredient(cheese);
   pizza.AddIngredient(spice);
   console.log(`A serving of ${pizza.name} contains:`);
   console.log(pizza.GetCalories() + " calories");