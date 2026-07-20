//array 

const myArr = [0,1,2,3,4,5,true,"rahul"]
// console.log(myArr[0]);


const myheros = ["rahul","raja"];

const myarr2 = new Array(1,2,3,4)



// myArr.push(6)// it will push at last in named array
// myArr.push(7);
// myArr.pop();//it will pop last value from array



//myArr.unshift(0);//insert at starting of array but shift all the position of arrays

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(3));




// const newArr = myArr.join()



// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


///-----SLICE---anad SPLICE--------------------------------

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3);// it will take from initial index to less one from last mentioned index 

// console.log(myn1);
// // console.log("B", myArr)

// const myn2 = myArr.splice(1, 3);// it will not take from index 1 to index 3
// console.log("c", myArr)
// console.log(myn2)



//--------------2----------------------
const marvel_heros=["thor","ironman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const hero = marvel_heros.concat(dc_heros)// concat show on new arrray that why we have to declare new array
console.log(hero);

const newhero =[...marvel_heros,...dc_heros];// must be 3 dot 
console.log(newhero);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);





console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));//convert to array
console.log(Array.from({name:"hitesh"}))// important


let score1=100
let score2 = 1234
let score3 =2345

console.log(Array.of(score1,score2,score3))///convert to values