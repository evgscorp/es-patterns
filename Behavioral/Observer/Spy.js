'use strict';
const Observable = require('./Observable.interface');
const Observer = require('./Observer.interface');
/**
 * @extends Observable
 */
class Spy extends Observable {
    constructor() {
        super();
        /**@type {Array[Observer]} */
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        let i = this.subscribers.indexOf(observer);
        if (i > -1) {observer.complete(); this.subscribers.splice(i, 1); console.log(observer.name, ' unsubscribed!');}
    }

    snitch(message) {
        for (const observer of this.subscribers) {
            observer.Next(message);
        }
    }
    missionComplete() {
        for (const observer of this.subscribers) {
            observer.complete();
        }
    }

}
module.exports = Spy;