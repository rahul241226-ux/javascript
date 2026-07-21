//Immediately invoked function expression (IIFE)





(function him()
//it is a name iife
{

console.log(`DB CONNECTED`);



})();


//(): function definition//(): exectution of function ,it is used to remove the pollution came from global declaration


(()=>{
//it is a simple iife
console.log(`DB CONNECTED TWO`)

})();




//unnamed iife
//where parameter passed
((name)=>

{
console.log(` ${name}`)


})('Rahul');