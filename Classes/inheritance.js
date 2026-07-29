class User {

constructor(username){

this.username = username


}
logme(){


console.log(`username is ${this.username}`);


       }

}

class Teacher extends User{


constructor(username, email, password){


super(username)
this.email = email;
this.password = password


}

   addcourse(){


console.log(`a new course was addes by ${this.username}`);


   }


}

const clz = new Teacher("jivann","jivan@12345","2345")
clz.addcourse();

const newclz = new User("xavier")
newclz.logme();