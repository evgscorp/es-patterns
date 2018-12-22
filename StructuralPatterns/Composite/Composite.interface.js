'use strict';

/**
 * @interface
 */
class Composite {
  
  getName() {
    throw new Error('Not implemented');
  }

  GetCalories() {
    throw new Error('Not implemented');
  }

  GetIronContent() {
    throw new Error('Not implemented');
  }

  GetVitaminCContent() {
    throw new Error('Not implemented');
  }
}

module.exports = Composite;
