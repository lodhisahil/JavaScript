// for loop

// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`outer loop: ${i}, inner loop: ${j}`);
    }
}