const myObject = {
    js: 'JavaScript',
    py: 'Python',
    java: 'Java',
    cpp: 'C++'
}

// for(const key in myObject) {
//     console.log(`${key} stands for ${myObject[key]}`);
// }


const programming = ['JavaScript', 'Python', 'Java', 'C++'];
// for (const index in programming) {
//     console.log(`${index} stands for ${programming[index]}`);
// }

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('IN', 'India');
for (const key in map) {
    console.log(key);
}