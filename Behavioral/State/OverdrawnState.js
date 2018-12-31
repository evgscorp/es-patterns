'use strict';
//const GoodState =  require('./GoodState');
const State = require('./State.interface');
const IronBankAccount = require('./IronBankAccount');

/** @extends State */
class OverdrawnState extends State {

    /**@param {IronBankAccount} account */
    constructor(account) {
        super();
        this.account = account;
    }

    Deposit(amount) {
        this.account.changeBalance(amount);
        if (this.account.balance > 0) {
            this.account.changeState(this.account.states.good);
        }
    }

    Withdraw(amount) {
        console.log(`Rejected! The account "${this.account.account}" has "Overdrawn State". Your balance is ${this.account.balance}`);
    }

}
module.exports = OverdrawnState;