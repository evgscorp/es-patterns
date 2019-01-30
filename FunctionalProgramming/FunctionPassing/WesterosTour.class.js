'use strict';
class WesterosTour{
    constructor(options){
        let error = false;
        this.events=['onTourStart', 'onEntryToAttraction','onExitFromAttraction', 'onTourCompletion'];
        if (Array.isArray(options)){
            options.forEach((opt, key)=>{
                if (!this.ValidateOptionsItem(opt,key)) {
                    error = true;
                    //break;
                }
            });
        } 
        if (error) throw new Error('wrong options!');
        this.options = options;
    }

    StartTour(){
        this.events.forEach((ename)=>{
            this.options[ename]();
        });
    }

    ValidateOptionsItem(option,name){
        if (this.events.includes(name)&& typeof(option) === "function") return true;
    }
}
module.exports = WesterosTour;