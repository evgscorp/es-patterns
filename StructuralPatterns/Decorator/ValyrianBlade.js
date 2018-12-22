const Sword = require('./Sword.interface');
class ValyrianBlade extends Sword{
    constructor (decoratedSword){
        super();
        this._decoratedSword = decoratedSword;
    }

    getDurability(){
        return this._decoratedSword.getDurability()+5;
    }
    
    getSharpness(){
       return this._decoratedSword.getSharpness()*1.3;
    }

}

module.exports = ValyrianBlade;