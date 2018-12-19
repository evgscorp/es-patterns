import {WizardHero} from './WizardHero.mjs';
import {Barbarian} from './Barbarian.mjs';

export class Factory {
    getHero(type,name){
        switch (type) {
            case 'magic':
                return new WizardHero(1+this.getRandomInt(3), 10+this.getRandomInt(5), 3+getRandomInt(3), name);
                break;

                case 'strenght':
                return new Barbarian(10+this.getRandomInt(5), 1+this.getRandomInt(3), 7+getRandomInt(7), name);
                break;
        
            default:
                break;
        }
    }

   getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
}