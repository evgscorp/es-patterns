/** @interface
 * 
 */
class Sword {

    getDurability(){
        throw new Error('not implemented');
    }
    
    getSharpness(){
        throw new Error('not implemented');
    }


}

module.exports = Sword;