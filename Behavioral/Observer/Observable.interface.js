const Observer = require('./Observer.interface');
class Observable {
    /**
     * @param {Observer} observer
     * @memberof Observable
     */
    subscribe(observer) {
        throw new Error('not implemented yet!');
    }
    unsubscribe(observer) {
        throw new Error('not implemented yet!');
    }
}
module.exports = Observable;