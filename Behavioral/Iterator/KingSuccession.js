'use strict';
const CustomIterator = require('./CustomIterator.interface');
/**
 * @class KingSuccession
 * @extends {CustomIterator}
 */
class KingSuccession extends CustomIterator {
    constructor(Successors, pointer = 0) {
        super();
        this.Successors = Successors;
        this.pointer = pointer;
    }

    get CurrentSuccessor() {
        return this.Successors[this.pointer];
    }

    Next() {
        this.pointer++;
        return this.CurrentSuccessor;
    }
}
module.exports = KingSuccession;