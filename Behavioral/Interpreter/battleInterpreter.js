'use strict';
const InterpreterI = require('./interpreterI.js');
/**
 * @class BattleInterpreter
 * @extends {InterpreterI}
 */
class BattleInterpreter extends InterpreterI {

  constructor() {
    super();
  }

  /**
   * @param {string} text
   */
  interpreteBattle(text) {
    console.log(text);
    let params = text.match('(.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)');
    return {
      agressor: params[1].trim(),
      defender: params[3].trim(),
      battleGround: params[2].trim(),
      winner: params[4].trim()
    };
  }
}
module.exports = BattleInterpreter;