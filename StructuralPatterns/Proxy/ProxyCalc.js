'use strict';
const LiterBarrelCalc = require('./LiterBarrelCalc');
const PintBarrelCalc = require('./PintBarrelCalc');
const QuartBarrelCalc = require('./QuartBarrelCalc');

class ProxyCalc {
    constructor() {
        this.results = [];
        this._literCalc = null;
    }

    saveRresult(res) {
        this.results.push(res);
    }

    getCachedResult(vol, type) {
       return this.results.find((row) => (row.volume == vol && row.type == type));
    }

    calculateNumberNeeded(vol, type) {
        type=type.toLowerCase();
        let cached = this.getCachedResult(vol, type);
        if (cached) {
            console.log('found in the cache !')
            return cached.value;
        }
        let res;
        if (this._literCalc == null) this._literCalc = new LiterBarrelCalc();
        let val;
        switch (type) {
            case 'pint':
                val = PintBarrelCalc.calculateNumberNeeded(vol, this._literCalc);
                res = {
                    volume: vol,
                    type: type,
                    value: val
                };
                break;
            case 'quart':
                val = QuartBarrelCalc.calculateNumberNeeded(vol, this._literCalc);
                res = {
                    volume: vol,
                    type: type,
                    value: val
                };
                break;
            default:
                val = this._literCalc.calculateNumberNeeded(vol);
                res = {
                    volume: vol,
                    type: type,
                    value: val
                };
                break;
        }
        this.saveRresult(res);
        return res.value;
    }
}

module.exports=ProxyCalc;