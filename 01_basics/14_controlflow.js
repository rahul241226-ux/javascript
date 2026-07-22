// if statement 

const isuserloggedin = true

if(isuserloggedin== true){

// console.log("yes")



}

// <,>,<=,>=,==,!=,===,!==


// const score = 200

// if(score>100){


// const power="fly"// when there is currly braket then there is another scope
// var power = "fly"// it is global so do not use var, use const and let 
// console.log(`user power:${power}`);
// }

// console.log(`userr power:${power}`)





// const balance = 1000
// // if(balance >500) console.log("test"),
// // console.log("test2");// don't do like this 


// if(balance<500){

// console.log("less than")


// }
// else if (balance<750){


// console.log("less than 750")

// }else{


// console.log("less than 1200")


// }




//------------------------------------IF : && and ||---



// const userloggedin = true 
// const debitcard = true 
// const loggedinfromgoogle= false
// const loggedinfromemail = true 
// const guesuser = true 

// if(userloggedin && debitcard && 2==2){


// console.log("allow to buy clothes")

// }


// if(loggedinfromgoogle || loggedinfromemail || guesuser ){

// console.log("user logged in ")


// }


//------------------------------------------SWITCH----------





// const month = 3

// switch(month){

// case 1:
//     console.log("january");
//     break;

// case 2:
//     console.log("feb");
//     break;


// case 3:
//     console.log("march");
//     break;// if there is no break here then all this code will execute after it hit true condition

// case 4 :// number let switch case to hit same number to match 
//     console.log("april");
//     break;
        
        
// default:
//   break;        
    




// }




//------------------truthy value -----------------------







const useremail = "rahul@gmail.com"

// if(useremail){

// console.log("got user email");


// }
// else{

// console.log("don't have user email");


// }


//-----------falsy values--------------------

// false,0,-0,bigint 0n,"", null,undefined,NaN


//---------TRUTY VALUE -----------------------

//"0".'FALSE',"",[],{},function(){}



// if(useremail.length ===0){

// console.log("array is empty")



// }


const emptyObj = {}



if(Object.keys(emptyObj).length === 0){


console.log("object is empty ")

}


///------------------null and undefined ------------------


let val1 ;
//val1 = 5 ?? 10
//val1 = null ?? 10// it skip null if null comest at begin

val1 = undefined ?? 15 // same as null

console.log(val1);



//--------------------------------


const teaprice =100
teaprice <=80 ? console.log("less than 80"): console.log("more than 80")
