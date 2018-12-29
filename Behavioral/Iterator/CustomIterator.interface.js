'use strict';
/**
 * @interface CustomIterator
 */
class CustomIterator {
    Next(){
        throw new Error('please implement Nex()');
    }
}
module.exports = CustomIterator;