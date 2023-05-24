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
    // because 
  }
  
  setupHelp();
  