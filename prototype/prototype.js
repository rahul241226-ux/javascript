// let myName = " rahul"
//let mychannel = "chai"

// console.log(myName.truelength);




let myHeros = ["thor", "spiderman"]

let heropower = {

    thor: "hammer",
    spiderman: "sling",
    getspiderpower: function () {


        console.log(`spider power is ${this.spiderman}`)
    }

}

Object.prototype.rahul = function () {


    console.log(`rahul is present in all objects`);
}
Array.prototype.heyrahul = function () {

    console.log(`rahul says hey`);


}

// heropower.rahul()
// myHeros.rahul()
// myHeros.heyrahul()



//---INHERITANCE------------------------------

const User = {

    name: "rahul",
    email: "rahua2345678"


}
const Teacher = {

    makevideo: true

}
const TeacherSupport = {


    isAvailable: false

}

const tasupport = {

    makeAssignment: 'js assignement',
    fullTime: true,
    __proto__: TeacherSupport

}

Teacher.__proto__ = User





//MODERN SYNTAX-----------------------


Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherusername = "rahul sah"
String.prototype.truelength = function () {

    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);

}

anotherusername.truelength()

"rahul".truelength()
"tea".truelength()