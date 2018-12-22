'use strict';
const Composite = require('./Composite.interface');
class Ingredient extends Composite{
  constructor(name, calories, ironContent, vitaminCContent) {
    super();  
    this.name = name;
    this.calories = calories;
    this.ironContent = ironContent;
    this.vitaminCContent = vitaminCContent;
  }

  getName() {
    return this.name;
}

GetCalories() {
    return this.calories;
}

GetIronContent() {
    return this.ironContent
}

GetVitaminCContent() {
   return this.vitaminCContent;
}
  
}

module.exports = Ingredient;
