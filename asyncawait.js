function shubhamAsyncFinction() {
    let p = new Promise(function(resolve){
        resolve("hi i m shubham")
    })
    return p
}
  async function main (){
     const value = await shubhamAsyncFinction()
     console.log(value);
     
    }
    main()