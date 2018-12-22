'use strict';
const Composite = require('./Composite.interface');
class Dish extends Composite{
    
    constructor(name){
        super(); 
        this._name = name;
        this._ingredients = new Array();
    }

    /**
     * @param {Ingridient} ingredient
     * @memberof Dish
     */
    AddIngredient(ingredient) {
        this._ingredients.push(ingredient);
    }

    getName() {
        return this._name;
    }

    GetCalories() {
        let calSum = 0;
        for (let ingredient of this._ingredients) {
            calSum += ingredient.GetCalories();
        }
        return calSum;
    }

    GetIronContent() {
        let iSum = 0;
        for (let ingredient of this._ingredients) {
            iSum += ingredient.GetIronContent();
        }
       return iSum; 
    }

    GetVitaminCContent() {
        let vSum = 0;
        for (let ingredient of this._ingredients) {
            vSum += ingredient.GetVitaminCContent();
        }
      return vSum;  
    }
}

module.exports = Dish;