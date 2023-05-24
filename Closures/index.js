// here we understand closures deeply 

//Problem - We are trying that whenever we focus on any input the relative msg should be shown to p tag which has id "help"


// we create a function that will help us to show msg 
function showHelp(help) {
    document.getElementById("help").textContent = help;
  }

// the main function which will assign event to each input
function setupHelp() {

    // array of objects with input id and messages we want to display
    const helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    // for iterating over the helptext array
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = () => {
        showHelp(item.help);
      };
    }

    // do you get the desired result with the help of above for loop -> no
    // because the moment we create closure( let me tell you where we create closure 
    //think as setupHelp function as outer and fucntions associated with onfocus event is inner function so it created a closure but we have a loop.
    // so we form three closures for email, name and age)
    // now onfocus function(inner functions) has access to same lexical environment that is setupHelp functions' environment
    // and we have "item" which is declared by var due to hoisting it has only function scope. so every time we iterating our loop 
    // it reassigns value to "item" variable so in the last we have message of age object. line no. 18.
    // that's why when we focus every time on any input it shows the last message.

    // we can resolve the above problem with the let or const keyword because they have block scope that means 
    // every time we declare item with let it sticks to that particular loop so we have three different items which
    // not changes like var because of block scope. below code will work perfectly fine. you can use var in for loop also.

    // for (let i = 0; i < helpText.length; i++) {
    //     let item = helpText[i];
    //     document.getElementById(item.id).onfocus = () => {
    //       showHelp(item.help);
    //     };
    //   }

    // one more method you can use another closure to remove the error. and your function works with the var keyword.
    // just give them separate lexical scope by giving them a another outer function.

    // function makeHelpCallback(help) {
    //     return function () {
    //       showHelp(help);
    //     };
    //   }
      
    //   function setupHelp() {
    //     var helpText = [
    //       { id: "email", help: "Your email address" },
    //       { id: "name", help: "Your full name" },
    //       { id: "age", help: "Your age (you must be over 16)" },
    //     ];
      
    //     for (var i = 0; i < helpText.length; i++) {
    //       var item = helpText[i];
    //       document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    //     }
    //   }

  }
  
  setupHelp();
  