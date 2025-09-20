function multiplyBy5(num){
    return num * 5
}
multiplyBy5.power = 2;
console.log( multiplyBy5( 5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(userName , score){
    this.userName = userName
}
createUser.prototype.increment = function(){
   this.score++
}
createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`);
    
}
const score1 = new createUser("shubham",100)
const score2 = createUser("xyz",30)
score1.printMe()