// class User {


// constructor(username, email, password){

// this.username = username;
// this.email = email;
// this.password= password


// }

// encryptPassword(){


//    return `${this.password}abc`


// }
// changeusername(){

// return`${this.username.toUpperCase()}`

// }

// }

// const tea = new User("tea", " tea@1234", "12345")

// console.log(tea.encryptPassword());
// console.log(tea.changeusername());







// ////Behind the scene 



function User(username, email,password){

this.username = username;
this.email = email;
this.password= password


}

User.prototype.encryptPassword = function(){


       return `${this.password}abc`
}


User.prototype.changeusername =function(){


return`${this.username.toUpperCase()}`

}



const fun = new User("function", " tea@123451234", "987654")

console.log(fun.encryptPassword());
console.log(fun.changeusername());