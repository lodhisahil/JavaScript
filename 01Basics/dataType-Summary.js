// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 0.33

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber  = 65628301568458877579n


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["ironman", "Thor"]
let obj = {
    name: "sahil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber)

//************************************* */

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubName = "sahillodhi"

let anotherName = myYoutubName
anotherName = "hello"

// console.log(myYoutubName)
// console.log(anotherName)

let user1 = {
    email: "ahkwuwef",
    upi: "wjmygf",
}

let user2 = user1
user2.email = "hello@gmail.com"
console.log(user1.email)
console.log(user2.email)