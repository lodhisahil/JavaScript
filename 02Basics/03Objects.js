//Singleton 
// Object.create


// Object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "sahil",
    "Full name": "Sahil Lodhi",
    [mySym]: "myKey1",
    age: 18,
    location: "patan",
    email:"sahil@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["maonday", "saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["Full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "sahil@lodhi"
// Object.freeze(Jsuser)
Jsuser.email = "lodhi@sahil"
// console.log(Jsuser)

Jsuser.greetings = function(){
    console.log("Hello User")
}
Jsuser.greetings2 = function(){
    console.log(`Hello User, ${this.name}`)
}

// console.log(Jsuser.greetings)
// console.log(Jsuser.greetings())
// console.log(Jsuser.greetings2())
Jsuser.greetings()
Jsuser.greetings2()