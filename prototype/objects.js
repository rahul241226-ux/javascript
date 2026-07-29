function multiplyby5(num) {


    return num * 5


}


multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


//in js evrythis is objects and we can make function and strings to behave like objects


function createUser(username, score) {


    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.username++
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.username}`);
    console.log(`score is ${this.score}`);
}

const coffe = new createUser("coffee", 125)
const tea = new createUser("tea", 250)


coffe.printMe()
tea.printMe()