// // function addTwoNumbers(num1, num2){

// //     console.log(num1 + num2)
// // }
// // function addTwoNumbers(num1, num2){
// //     let result = num1 + num2
// //     return result
// //     console.log("sahil")
// // }
// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// const result = addTwoNumbers(2, 8)

// // console.log(result)

// function loginUserMessage(username = "sam"){
//     if (!username) {
//        console.log("please enter valid usename")
//        return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("sahil"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2, 3, 5, 5, 5488644))

const user = {
    username: "sahil",
    prices: 1667
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "hello",
//     price: 999
// })

const myNewArray = [200, 500, 2498]

function returnSecondValue(arr){
    return arr[1]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([2,45]))

