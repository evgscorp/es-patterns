export class Tournament {
    /**
     *Creates an instance of Tournament.
     * @param {string} name
     * @memberof Tournament
     */
    constructor(name){
        this.name=name;
        this.Events = [];
        this.Prizes = [];
        this.Attendies = [];
    }
} 