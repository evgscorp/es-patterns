const Sword = require('./Sword.interface');
class RegularSword extends Sword {
    constructor(blacksmith) {
        super();
        this.durability = .6 * blacksmith.forgeLevel;
        this.sharpness = 1 + blacksmith.forgeLevel + blacksmith.toolsLevel;
    }

    getDurability() {
        return this.durability;
    }

    getSharpness() {
        return this.sharpness;
    }

}

module.exports = RegularSword;