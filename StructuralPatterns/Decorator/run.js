const RegularSword = require('./RegularSword');
const ValyrianBlade = require('./ValyrianBlade');

let blade = new ValyrianBlade(new RegularSword({forgeLevel:8, toolsLevel:7}));
console.log(`Valyrian Blade durability = ${blade.getDurability()}`);
console.log(`Valyrian Blade cutting ability = ${blade. getSharpness()}`);