const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if (!error) {
            resolve({userName : "javascript", Password : "12345"})
        }else{
            reject("Error : something went worng")
        }

    },1000)
})
async function consumePromise() {
   const response =  await promiseThree
   console.log(response);
   
}
consumePromise()