//for of

//["", "", "", "", ""]
//[{}, {}, {}, {}, {}]
// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello";
// for (const greet of greetings) {
//     console.log(greet);
// }

// map 

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('IN', 'India');

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, value);
}

myObject = {
    game1: 'Valorant',
    game2: 'CSGO',
    game3: 'Apex Legends'
}
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value);
}