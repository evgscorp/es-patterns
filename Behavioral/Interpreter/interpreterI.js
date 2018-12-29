'use strict';
/**
 * @interface InterpreterI
 */
class InterpreterI {
    constructor() {
        console.log('InterpreterI initialized');
    }
    interpreteBattle() {
        throw new Error('not implemented');
    }
}
module.exports = InterpreterI;