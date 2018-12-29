'use strict';
/**
 * @interface CustomIterator
 */
class CustomIterator {
    Next(){
        throw new Error('please implement Next()');
    }
}
module.exports = CustomIterator;