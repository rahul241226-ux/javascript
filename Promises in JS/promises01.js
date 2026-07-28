//1 promise---------------------------------------------------------------
const promise_1 = new Promise(function (resolve, reject) {

    //DO an async task
    //db  calls , cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promise_1.then(function () {

    console.log("promise consumed");
})






//2 promise -------------------------------------------------------------
new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)

}).then(function () {

    console.log("Async task 2 resolved");

})








//3 promise -----------------------------------------------------



const promise3 = new Promise(function (resolve, reject) {


    setTimeout(function () {

        resolve({ username: "Rahul", email: "rahul.241226@ncit.edu.np" })


    }, 1000)

    promise3.then(function (user) {


        console.log(user);

    })
})





//4 promise ------------------------------------------------




const promise4 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({ username: "RAHUL", password: "1234" })
        }
        else {
            reject('ERROR: something went wrong');

        }
    }, 1000)
})

const username = promise4.then((user) => {
    console.log(user);
    return user.username



}).then((username) => {
    console.log(username);




}).catch(function (error) {
    console.log(error);

}).finally(() =>

    console.log("The promises is either resolved or rejected")

)





///5 promises ------------------------------------------------------




const promise5 = new Promise(function (resolve, reject) {


    setTimeout(function () {

        let error = true;

        if (!error) {
            resolve({ username: "js", password: "1234" })
        }
        else {
            reject('ERROR: js went wrong');

        }


    }, 1000)

});

async function consumepromise5() {

    try {
        const response = await promise5
        console.log(response);


    } catch (error) {

        console.log(error);


    }


}

consumepromise5();




// async function getAllUsers(){


// try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// const data =response.json();

// } catch (error) {
//     console.log("E: error");


// }


// }
// getAllUsers();




fetch("https://jsonplaceholder.typicode.com/users").then((response) => {

    return response.json()
}).then((data) => {

    console.log(data);

})    .catch((error) =>
        console.log(error))