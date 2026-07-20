// objects can be declared as literals and constructors



//objects literals


//Object.create


const mySym = Symbol("key1")

const Jsuser= {


name:"rahul",// we can declare anythings in objects like numbers 
"full name":"Rahul sah ",
//o:"rahul",
[mySym]:"mykey1",
age : 23,
email:"sdfghjkl",
location:"kathmandu",
isloggedin:false,





}

///console.log(Jsuser);
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof Jsuser.mySym)



Jsuser.email= "rahulsah@chatgptgmail.com"
//Object.freeze(Jsuser);
Jsuser.email= "rahulsah@google.com"
console.log(Jsuser);




Jsuser.greeting = function(){

///console.log("hello JS user");
console.log(`hello JS user,${this.name}`);//string interpolation




}
console.log(Jsuser.greeting());