'use strict';
const IronBankAccount = require('./IronBankAccount');
const tyrionAccount = new IronBankAccount("Tyrion Lannister",1000);
tyrionAccount.withdraw(500);
tyrionAccount.withdraw(400);
tyrionAccount.withdraw(900);
tyrionAccount.withdraw(199);
tyrionAccount.deposit(300);
tyrionAccount.withdraw(200);
