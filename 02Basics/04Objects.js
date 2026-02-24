// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "sahil"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "sahil@lodhi",
    fullName:{
        userFullname: {
            firstName: "sahil",
            lastName: "lodhi"
        }
    }
}

// console.log(regularUser.fullName.userFullname.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3  = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const course = {
    courseName: "jsHindi",
    price: "999",
    teacher: "Hitesh"
}
// console.log(course.teacher)
const {teacher: t} = course

console.log(t)

