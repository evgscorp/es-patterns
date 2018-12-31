'use strict';
/**
 * @interface State 
 * */
class State {

    Deposit(amount) {
        throw new Error('not implemented!');
    }

    Withdraw(amount) {
        throw new Error('not implemented!');
    }

}
module.exports = State;