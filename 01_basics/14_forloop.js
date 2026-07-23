//for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
  
//     if(element == 5){
//         console.log("5 is best number ");
        
//     }

// }
//   console.log(element);


//------------------------------------------------------------



 
// for (let i = 0; i <= 10; i++) {
//     // console.log(`outer loop: ${i}`);
    
//    for (let j = 0; j <=10; j++) {
// //   console.log(`iner loop value ${j} and inner loop ${i}`);
       
//   console.log(i +'*' + j + '=' + i*j);
  

//    }
    
// }





//----------------------array------------------------


let myarray =["flash","batman","superman"]
// console.log(myarray.length);


for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element)
    
}






//--------------------keywords--------------------------------


//-break and continue

for (let index = 1; index < 20; index++) {
    if(index == 5){

//    console.log(`detected 5`)
//    break;// it stopped after it find 5 
continue;// it let code stop for one timewhen condition is met


    }
//    console.log(`value of i is ${index}`);
   
    
}






//------------------types of loop---------------



//1----------------while loop---- code execute only conditin hit

let index = 0

while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index= index +2; 
    
}

let array = ['f','d','r']
let arr = 0
while (arr< array.length) {
    // console.log(`value is ${array[arr]}`);
    arr = arr + 1 ;
    
}




//------ do while ---- first it will do once then check condition



let s  = 11

do {
    // console.log(`score is ${s}`);
    s++
    
    
} while (s <=10);


//--------------------high order array loop -------------------------------------



//["",""]  string in array
//[{},{},{}] objects in array


const arry =[1, 2, 3 , 4 , 5]

for (const num of arry) {

    // console.log(num);
    
}





//-----------------Maps-----------------------------------




const map = new Map()
map.set('uas',"united state of america")
map.set('IN',"india")
map.set('fr',"france")


// console.log(map);



///--------------------
for (const key  of map) {
    // console.log(key);
    
}

//--


// const myObject={



// 'game1': 'NFS',
// 'game2':'SPIDERMAN'


// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-',value)

// }//myObject is not iterable


///----------------------

// const myObject = {



// JS:'javascript',
// cpp:'c++',
// rb:'ruby',
// swift:'swift by apple'



// }

// for (const key in myObject) {
   
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }


// const programming = ["js","rb","py","java"]
// for (const key in programming) {

//     console.log(key);
    
// }






//------------------------------------------for each loop----------------





const coding =[ "js","ruby","java","python","cpp"]

// coding.forEach(  function (item) {
//     console.log(item);
    
// } )

// coding.forEach(  (item) => {

//     console.log(item);
    
// })



// function printMe(item){


// console.log(item)

// }





const mycoding =[
    {
languagename :"javascript",
languagefilename:"js",
},

    {
languagename :"java",
languagefilename:"j",
},
    {
languagename :"python",
languagefilename:"py",
}


]

mycoding.forEach((item) => {

console.log(item.languagename);


})