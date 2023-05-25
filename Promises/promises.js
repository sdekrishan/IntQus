// what is promises in javascript?
// ans - to handle asynchronus operation we use promises before promises we use callbacks to handle async operations
// but using callback again and again make callback hells and this is a hectic approach. to overcome this es6 gives promises
// with the help of that we can handle async operations in a structured way and its easier to read and understand the code.

// as the name tells promises promise us to handle async operations in three states
// if promise is pending that means we have to wait till it fulfilled or rejected.
// if promise is fulfilled that means operation runs/compeleted successfully.
// if promise is rejected that means operation gives us error or failed.


// terms related to promises 
// 1. chained promises - 

const name = new Promise ((resolve, reject)=>{
    resolve("value")
})

console.log(name.then(res => console.log(res)))