var _instance;
export class Wall {
    constructor(){
        this.height=0;
    }
    setHeight(height){
        this.height=height;
    }
    getStatus(){
        console.log("Wall is " + this.height + " meters tall"); 
    }

    static get _instance(){
        if (!_instance) _instance = new Wall();
        return _instance;
    }
  
} 
//export var wall = Wall._instance;


