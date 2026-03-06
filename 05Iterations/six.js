// const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values); // undefined

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//     return num > 4;
// }  );

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(newNums); // [5, 6, 7, 8, 9, 10]

const books = [
    {
        title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'non-fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'history', publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'non-fiction', publish: 1989, edition: 2010
    },
    {
        title: 'Book Five', genre: 'science', publish: 2009, edition: 2014
    },
    {
        title: 'Book Six', genre: 'fiction', publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'history', publish: 1995, edition: 2012
    },
    {
        title: 'Book Eight', genre: 'science', publish: 1998, edition: 2015
    },
    {
        title: 'Book Nine', genre: 'history', publish: 2005, edition: 2018
    }
]

let userBooks = books.filter((bk) => bk.genre === 'history')

userBooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === 'history')

console.log(userBooks);