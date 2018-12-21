import {FamilyPrototype} from './FamilyPrototype.mjs'
export class Lannister extends FamilyPrototype {
    constructor() {
        super()
        this.ironBankAmount = 10000;
    }

    setFeature(key, val) {
        this[key] = val
    }

    Clone (){
        console.log('cloning...')
        let clone = new Lannister();
        let keys = Object.keys(this)

        keys.forEach(k => clone.setFeature(k, this[k]))

        console.log("family member is cloned");
        return clone;
    }
}
