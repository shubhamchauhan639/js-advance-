function square(num){
    return num * num
}
function cube(num){
    return num **3
}
function sumOfSomeone(a , b , callback){
    let number1 = callback(a)
    let number2 = callback(b)
    return number1 + number2
}
let ans = sumOfSomeone(2,3,cube)
console.log(ans);
