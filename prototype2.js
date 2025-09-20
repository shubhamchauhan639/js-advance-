// let myName = "shubham              "
// console.log(myName.length);

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor : "hammer" ,
    spiderman : "sling", 

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.shubham = function(){
    console.log("shubahnm ois presnt in all");
    
}
heroPower.shubham()
myHeros.shubham()