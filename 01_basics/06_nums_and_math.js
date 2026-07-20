const score = 400
console.log(score);


const balance = new Number (123)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber = 123.95678
console.log(othernumber.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));




//-------------------------MATH-----------------------//

console.log(Math);
console.log(Math.abs(-4));//it will convert -ve to +ve 
console.log(Math.round(4.9));//it will choose high or low based on limits 
console.log(Math.ceil(4.2));//even .2 more than 4 , it will coose high value
console.log(Math.floor(4.8));//it will choose down value 

const num = 20;
console.log(Math.sqrt(num));
console.log(Math.min(3,5,2,1))


console.log(Math.random());// math.random gives values under 0 and 1

console.log((Math.random()*10)+1);//to avaoid 0 we added 1 to random
console.log(Math.floor(Math.random()*10)+1);


const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);//max- min gives range and adding 1 helps to avoid 0 and to avoid previous value we added min