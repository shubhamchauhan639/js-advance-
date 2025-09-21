class user {
    constructor(userName , email , password){
        this.userName =  userName
        this.email = email
        this.password = password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
}
const shubham = new user("shubham","shubajsb@gmail.com","4564")
console.log(shubham.encryptPassword());

