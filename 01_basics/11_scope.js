


if(true) {

let a = 10;
const b = 34
var c = 67  

// console.log("Inerr:",a)

function addnum(){




}
}//it is the scope

// console.log(a)
// console.log(b)
console.log(c)



function one (){


const username="rahul"


function two (){

const website ="youtube"
console.log(username);


}
// console.log(website);
two();

}
// one()






if(true){



const username = "rahul"
if(username== "rahul"){


const website ="youtube "
console.log(username+website)

}
// console.log(website)// because it have only scope in 'if'

}

// console.log(username);// it does not have username scope










//------------------Intersting------------------

function addone(num){


return num+1



}

console.log(addone(5))


const addTwo = function(num){

return num+2



}// cannot access addtwo because it is held by variable const 
addTwo(5)