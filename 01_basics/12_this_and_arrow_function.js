const user ={

username :"rahul",
price:234,


welcomemessage:function(){

    console.log(`${this.username}, welcome to website `);

    console.log(this)


}


}

// user.welcomemessage()
// user.username="raja"
// user.welcomemessage()

// console.log(this)


// function him (){

//     console.log(this)



// }
// him()







//arrow function: in arrow function we can use this

const him= ()=>{

let username ="rahul"
console.log(this.username);


}

him()


// pure arrow function----------------


// const addnum=(num1,num2)=>{
    
    
    
//  return num1+num2;
// }// if we are using paraenthesis bracket then we have to write return or to define objects otherwise nothing



// const addnum=(num1,num2)=>num1+num2;
// const addnum=(num1,num2)=> (num1+num2)

const addnum=(num1,num2)=> ({username:"rahul"})


console.log(addnum(3,4))




// const myarray=[1,2,3,4,5]


// myarray.forEach(()=>)