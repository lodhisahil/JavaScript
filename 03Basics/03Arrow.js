const user = {
    username: "Sahil",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

// user.welcomeMsg()
// user.username = 'sam'
// user.welcomeMsg()

// console.log(this)

// function chai(){
//     let username = "sahil"
//     console.log(this.username)
// }

// chai()

const chai = () =>{
    let username = "sahil"
    console.log(this)
}
// chai()

// const addtow = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtow(3, 4))

// const addtow = (num1, num2) =>  num1 + num2

// const addtow = (num1, num2) =>  (num1 + num2)

const addtow = (num1, num2) =>  ({username: "sahil"})

console.log(addtow(3, 4))


const myarray = [1, 2, 3, 4, 5, 6]

// myarray.forEach( () => () )
    