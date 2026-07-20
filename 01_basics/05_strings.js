const name = "rahul"
const repocount = 45

// console.log(name+repocount+"value")

console.log(`hello my name is ${name} and my repocount is ${repocount}`)


const gamename = new String (`rahu-l`)


// console.log(gamename[0]);
// console.log(gamename._proto_);


// console.log(gamename);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));

console.log(gamename.indexOf('r'))

// const newstring = gamename.substring(0,4)//from beginning and took 4 strings and substings does not take negative values so it can only read from beggining 
// console.log(newstring);


const anotherstring = gamename.slice(-6,2);// starrt from last and took 2 strings 
console.log(anotherstring)



const newstring1 = "   rahulsah   "
console.log(newstring1);
console.log(newstring1.trim());


const url = "https://rahul:com/rahu%23sah"

console.log(url.replace('%23','-'))
console.log(url.includes('swashank'))


console.log(gamename.split('-'))