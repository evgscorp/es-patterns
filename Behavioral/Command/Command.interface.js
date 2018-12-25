/** @interface */
class Command {
   Execute(){
      throw new Error('not implemented!');
   }
}
module.exports = Command;