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
            let res = this.lazyLoad(i);
            this.orders.splice(i,1);
            return res;
        }
    }

    lazyLoad(i){
        return {backery:this.name, order:this.orders[i], oid:i};
    }

}

module.exports = Backery;