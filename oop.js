function User(userName,loginCount,isloggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    return this
}
const userOne = new User("shubam",7,true)
const userTwo = new User("chuahan",12,false)
console.log(userOne);
