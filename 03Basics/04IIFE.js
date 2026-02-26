// (function chai(){
//     console.log(`DB CONNECTED`)
// })()

( function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
} )();
( (name) =>{
    console.log(`DB CONNECTED two ${name}`)
} )("sahil")