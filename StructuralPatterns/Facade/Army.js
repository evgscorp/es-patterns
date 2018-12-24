var Army = function(name){
    this.name = name;
    this.infantryDivisions=[];
    this.archersDivisions = [];
    console.log(String.prototype.concat('Army ', name, ' created!'));
}

Army.prototype.addInfantryDivision = function(idivision){
    this.infantryDivisions.push(idivision);
}

Army.prototype.addArchersDivision=function(adivision){
    this.archersDivisions.push(adivision);
}

Army.prototype.battlePosition = function(){
    this.infantryDivisions.forEach(function(idivision){
        idivision.takePosition('first line');
        idivision.shieldsMove('ahead');
    });

    this.archersDivisions.forEach(function(adivision){
        adivision.takePosition('second line');
        adivision.bowAction('uncover');
    });
}

Army.prototype.attack = function(){
    this.infantryDivisions.forEach(function(idivision){
        idivision.lancesMove('ahead');
        idivision.move('towards the enemy');
    });

    this.archersDivisions.forEach(function(adivision){
        adivision.bowAction('charge');
        adivision.bowAction('shoot');
        adivision.bowAction('charge');
        adivision.bowAction('shoot');
        adivision.bowAction('charge');
        adivision.bowAction('shoot');
    });
}

module.exports = Army;