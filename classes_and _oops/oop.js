const user = {
username : "rahul",
logincount: 8,
signedin: true,

getUserDetails: function(){


//console.log(" got user details from database");

// console.log(`username: ${this.username}`);
// console.log(this);


     }
}

// console.log(user.username);
// console.log(user.getUserDetails());



//-------------------CONSTRUCTOR-------------------------



// const promiseone = new Promise()
// const date = new Date()




function User(username , logincount, isloggrdin){


this.username = username;
this.logincount = logincount;
this.isloggrdin = isloggrdin;
return this


}



const userone = User("rahul", 12 , true)
const usertwo = User("raja",11,false)



console.log(userone);
console.log(usertwo);







