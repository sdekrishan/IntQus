// closures 
// ans - with the help of closures functions can access variables of its parent's environment or with the help of 
// closures function can remember variables, functions and parameters and access them from their enclosing scope.

// enclosing scope - it is nothing but the area in which a function is defined is called enclosing scope. It is
//related to closures.

// for example - 
// function outer(){
//     let name = "name";
//     function inner(){
//         console.log(name);
//     }
//     return inner
// }

// in the above example line no. 10 is called the enclosing scope for inner function

// a simple but tricky question 

// function outer(){
//     let name = "name";
//     function inner(){
//         console.log(name);
// console.log(lname)
//     }
// let lname = "kumar"
//     return inner
// }
// let ram = outer();
// console.log(ram())

// what will be the output for above code - 
//ans - it will print name, kumar and undefined. dont get confused that inner function cannot access lname variable
// because it is declared after the function just remember here the concept of code execution context( memory phase and execution phase)

// Example of a common closure
// let name = "Byee";
// function a() {

//   let name = "Heyy";
//   return function b() {
//     console.log(name);
//   };
// } 


// qus - what we can achieve from closures ? 
// ans - we can achieve many things with the help of closures - 

// 1. encapsulating - it is also mentioned in oops. encapsulation means making things/ variables/ data private or inaccessible
// which need not to be shared and we can say that encapsultion helps us to makes data protected or safe.

// for example we can declare variables in outside function's scope and use them in inner function so the data we 
// declared in outside function's scope cannot be changed (only changed if we changed them through functions) so that's how
// we can protect our data with the help of closures.

//2. maintaining state - with the help of closures we can maintain states take a example of counter app
// function counter(){
//     let count = 1; 
//     function increase(){
//         count++
//         return count
//     }
//     function decrease(){
//         count--;
//         return count
//     }
//     function print(){
//         return count
//     }
//     return {increase, decrease, print}
// }

// let countFun = counter();
// countFun.increase();//2
// console.log(countFun.print())// print 2
// countFun.increase();// 3
// countFun.increase();//4
// console.log(countFun.print()) // print 4
// countFun.decrease(); // 3
// console.log(countFun.print()) // print 3

// so in the above example we see that we can manage our state with the help of closures and this can be helpful
// in creating debouncing and throttling

// 3. creating function factories - 
// function factories - as the name suggests with the help of closures we can generate functions 
// take a look at the below example it is same as 2 number's example but take a look

// function add(num){
//     function increase(incby){

//         return num+incby
//     }
// return increase
// }

// let first = add(3);
// let firstOp = first(5)
// let second = add(5);
// let secondOp = second(5)
// console.log(firstOp,secondOp);


// in the above code we can generate as many functions we want and manipulate them with our input data that is handled by closures.

// some code snippets related to closures - 
// tips- always remember hoisting concepts while attempting the closures.

// qus 1. ->
// function outer() {

//     let x = 10;
    
//     function inner() {
    
//     var y = 5;
    
//     console.log(x + y);
    
//     x = 20;
    
//     }
    
//     return inner;
    
//     }
    
//     var innerFunc = outer();
    
//     innerFunc(); ->15
//     innerFunc(); ->25

// qus 2 -> it is the common question which will you see in closures
// for(var i = 0; i < 5; i++){
//    setTimeout(()=>{
//    console.log(i)
// },1000)
// }
// always ask why -> here problem is not with closures problem is with hoisting because we declare our loop with var
// which only have function scope and global scope so when our loop is working it changes the value of i on every iteration
// and because of setTimeout web api it is going to event loop. so we assign 1sec of time to i and after 1sec when our setTimeout
// enters in our call stack at that time our for loop has been executed and because of var its value becomes now 5.
// so we have 5 webapi of settimeout and it gives us 5 as output 5 times after 1 sec.

// how to solve this -> with the help of closures 
// if we give each i an another/separate lexical environment so they can access separate values
// for example -
// for(var i = 0; i < 5; i++){
//     function look(i){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     }
//     look(i)
// }

// now we starts create a closure on line no. 151 with the help of closure setTimeout has access to its parent's 
// environment which is i and for 5 setTimeout it has different lexical environment so at that time when they executing in 
// event loop or enter is call stack they have access to their lexical environment variable. that's how we get
// 0,1,2,3,4 after 1 sec.

// the other solution would be - 

// for(let i = 0; i < 5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
// }
// because let has block scope it will assign value to setTimout different and never overrides it value
