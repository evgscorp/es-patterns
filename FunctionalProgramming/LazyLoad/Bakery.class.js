'use strict';
class Backery {
    constructor(name){
        this.name = name;
        this.orders = [];
    }

    addOrder(order){
        this.orders.push(order);
    }

    takeOrder(order){
        let i = this.orders.findIndex((row)=>row==order);
        if (i>=0){
            let res = {backery:this.name, order:this.orders[i], oid:i};
            this.orders.splice(i,1);
            return res;
        }
    }

}

module.exports = Backery;