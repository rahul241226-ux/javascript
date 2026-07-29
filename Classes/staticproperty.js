class User {

  constructor(username){

this.username = username

  }

  logme(){

console.log(`username : ${this.username}`);


  }

  createid(){

    return `1234`
  }

}

const rahul = new User("rahul")
console.log(rahul.createid())






class Teacher extends User{


constructor(username, email){


super(username)
this.email = email

}
getemail(){

  return `Email of Tecaher is ${this.email}`
}


}

const iphone = new Teacher("iphone", "fgh@234567")
console.log(iphone.getemail())