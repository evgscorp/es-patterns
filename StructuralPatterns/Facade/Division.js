'use strict';
var Division = function  (name, count) {
        this.name = name;
        this.count = count;
        this.position = 'stand aside';
        this.status = 'standby';
        
    }

    Division.prototype.takePosition = function(position){
        this.position = position;
        console.log(String.prototype.concat('Division ',this.name,' takes ', this.position, ' position!'));
    }

    Division.prototype.move = function(direction){
        this.status = String.prototype.concat('moving ',direction);
        console.log(String.prototype.concat('Division ',this.name,' ', this.status , ' position!'));
    }
 
module.exports = Division;