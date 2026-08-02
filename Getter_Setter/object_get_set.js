const User = {
_email: 'dfghjkl',
_password:'abc',


get email(){
    return this._email.toUpperCase()
},
set emai(value){

this._email = value

}}

const tea= Object.create(User)
console.log(tea.email);
 