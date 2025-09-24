function square(num){
    return num * num
}
function cobe(num){
    return num **3
}
function sumOfSquare(a , b , callback){
    let square1 = callback(a)
    let square2 = callback(b)
    return square1 + square2
}
let ans = sumOfSquare(2,3,cobe)
console.log(ans);
