const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal;
// }, 0 )

// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal;
// }, 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        item: 'js course',
        price: 299
    },
    {
        item: 'python',
        price: 999
    },
    {
        item: 'html course',
        price: 199
    }
];

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(cartTotal);