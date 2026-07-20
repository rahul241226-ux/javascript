///DATE

let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());
// console.log(myDate.toISOString());
 //console.log(myDate.toLocalString());

 console.log(typeof myDate );


// let myCreatedDate = new Date (2026, 6, 20);//months start from 0 to 11
// console.log(myCreatedDate.toDateString());


let myCreatedDate = new Date (2026, 6, 20, 5, 4);
console.log(myCreatedDate.toLocaleString());




let MyTime= Date.now();

// console.log(MyTime);
// console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());




newDate.toLocaleString('default',{

weekday:"long",



})