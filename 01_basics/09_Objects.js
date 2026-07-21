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
// console.log(typeof Jsuser.[mySym])



Jsuser.email= "rahulsah@chatgptgmail.com"
//Object.freeze(Jsuser);
Jsuser.email= "rahulsah@google.com"
// console.log(Jsuser);




Jsuser.greeting = function(){

///console.log("hello JS user");
// console.log(`hello JS user,${this.name}`);//string interpolation




}
// console.log(Jsuser.greeting());







//-------------------part 2 Objects ---------------------



const tinder = new Object()// singleton objects 
//const tinder = {}// non singelton object 

 tinder.id = "123ab"
tinder.name ="chandan"
tinder.isloggedin = false

//console.log(tinder);

const regularuser = {


email : "some@gmail.com",
fullname:{


userfullname :{


firstname:"rahul",
lastname:"sah",

}

}



}

//console.log(regularuser.fullname?.userfullname.firstname)

const obj1 ={1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}


// const obj3 = Object.assign({},onj1,obj2)
const obj3 = {...obj1,...obj2};
// console.log(obj3)




const users = [

{

id:1,
email:"rahulsah@gmail.com",

},
{

id:1,
email:"rahulsah@gmail.com",

},

{

id:1,
email:"rahulsah@gmail.com",

},
]

users[1].email
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isloggedin'));


//----------objects destructing and JSON API---------------





//DESTRUCTING-----------------



const course ={

coursename :"js ",
price:23,
courseteacher:"rahul",




}

const{courseteacher:teacher}=course;// this is how we destructure objects 
console.log(teacher)




const navbar =({company}) =>{




}
navbar(company ="rahul")

// {

// "name":"rahul".,
// "course":"javascript",
// "price":"free",
// }



[

{},
{},
{},


]