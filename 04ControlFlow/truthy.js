// const useremail = []

// if (useremail) {
//     console.log("User email is valid");
// }else{
//     console.log("User email is not valid");
// }

//falsy values 
// false
// 0
//-0
//BigInt 0n
// ""
// null
// undefined
// NaN

//truthy values
// true
// "0"
// " " (space)
//function(){}
// "false"
// []
// {}


// if (useremail.length === 0) {
//     console.log("User email is empty");
// }else{
//     console.log("User email is not empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length===0) {
//     console.log("Object is empty");
// }

//Nullish coalescing operator (??) : null or undefined

// let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1); // Output: 10

//ternary operator

// condition ? true : false

const age = 18
age >= 18 ? console.log("You are an adult") : console.log("You are a minor");
