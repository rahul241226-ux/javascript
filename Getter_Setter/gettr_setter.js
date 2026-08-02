class User {



    constructor(email,password){

this.email= email;
this.password = password


    }
        get email(){

         return this._email.toUpperCase()
        //  return `${this._password}rahul`
}
    set email(value){

   this._email = value 

    }


    
    get password(){

        //  return this._password.toUpperCase()
         return `${this._password}rahul`
}
    set password(value){

   this._password = value.toUpperCase();   

    }

}

const rahul = new User("rahuk1234","abc")
console.log(rahul.password)