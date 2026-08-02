function User(email,password){


this.email = email;
this.password = password
Object.defineProperties(this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})

}





Object.defineProperties(this, 'email', {
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password = value
    }
})



const tea = new User("rahuldfghjkl","asdf")
console.log(tea.email); 
