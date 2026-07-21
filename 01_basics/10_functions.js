

function sayMyName(){

console.log("R")
console.log("a")
console.log("h")
console.log("u")
console.log("l")



}
// sayMyName()




// function addtwonuber(num1,num2){//parameters

// console.log(num1+num2);



// }

function addtwonuber(num1,num2){//parameters
// let result = num1+num2;
 // console.log("rahul sah ")
// return result;
return num1+num2;



}



// addtwonuber(3,6)//arguements 


// const result = addtwonuber(5,33)
// console.log("Result: ",result);






function loginusermessage(username){
    if(!username){
        console.log("Please enter a username");
    }


    return `${username} just logged in`


}

console.log(loginusermessage("rahul sah "))






//--------------functions with objects -----------------


function calculator(val1,val2,...num1){//... is rest annd spread operator


return num1

}

// console.log(calculator(200,300,400))// passes the parameters 



const user={

username :"rahul sah ",
price:1234


}
function handleObject(anyobject){

console.log(`Username is ${anyobject.username} and coursr price of js is ${anyobject.price}`)


}
handleObject({
    

username:"rahul",
price:2345


}) 



const myNewarray =[234,2345,456,345]

function returnsecondvalue(getArray){

return getArray[3]


}
console.log(returnsecondvalue(myNewarray))