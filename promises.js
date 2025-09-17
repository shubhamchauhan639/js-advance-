const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function() {
        console.log("async task");
        resolve()
           },1000)
    
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({userName : "shubham", Password : "12345"})
        }else{
            reject("Error : something went worng")
        }

    },1000)
})
promiseTwo.then((user)=>{
console.log(user);
return user.userName

}) .then((userName)=>{
console.log(userName);

}).catch(function(error){
    console.log(error);
    
})