// if
// const isUserLoggedIn = true;


// if (isUserLoggedIn) {
//     console.log("Welcome back!");
// }
// if (2 === "2" ) {
//     console.log("This is true");
// }

// const score = 200;

// if (score > 100) {
//     const power = "fly"
//     console.log(`You have the power to ${power}`);
// }
// console.log(`You have the power to ${power}`)



// const balance = 1000
// if (balance > 500) console.log("You have a good balance"),
// console.log("You can buy a new phone");

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750) {
// console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("You have a good balance");
// }

const userloggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithFacebook = false;

if (userloggedIn && debitCard) {
    console.log("You can buy a new phone");
}

if (userloggedIn || debitCard) {
    console.log("your are logged in ");
}