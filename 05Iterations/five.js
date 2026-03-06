const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];


// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printItem(item) {
//     console.log(item);
// }

// coding.forEach(printItem);

// coding.forEach((item, index, arr) => {
//     console.log(`${index} stands for ${item} & array is ${arr }`);
// })

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName , item.languageFileName)
})