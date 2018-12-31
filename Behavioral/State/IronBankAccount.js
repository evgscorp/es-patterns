'use strict';
const OverdrawnState = require('./OverdrawnState');
const GoodState = require('./GoodState');
class IronBankAccount {
    constructor(account, balance) {
        this.account = account;
        this.balance = balance;
        this.states = {
            good: new GoodState(this),
            overdrawn : new OverdrawnState(this)
        }
        this.state = this.states.good;

    }

    changeBalance(amount) {
        this.balance += amount;
        console.log(`The account "${this.account}" is updated. Your balance is ${this.balance}`);
    }

    changeState(state) {
        this.state = state;
    }

    deposit(amount) {
        this.state.Deposit(amount);
    }

    withdraw(amount) {
        this.state.Withdraw(amount);
    }

}

module.exports = IronBankAccount;