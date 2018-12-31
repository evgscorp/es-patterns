'use strict';
const State = require('./State.interface');
const IronBankAccount = require('./IronBankAccount');

/** @extends State */
class GoodState extends State {

    /**@param {IronBankAccount} account */
    constructor(account) {
        super();
        this.account = account;
    }

    Deposit(amount) {
        this.account.changeBalance(amount);
    }

    Withdraw(amount) {
        if ((this.account.balance - amount) >= -100)
            this.account.changeBalance(-1 * amount);
        else console.log('not enough money, operation is rejected');
        if (this.account.balance < 0) this.account.changeState(this.account.states.overdrawn);
    }

}
module.exports = GoodState;