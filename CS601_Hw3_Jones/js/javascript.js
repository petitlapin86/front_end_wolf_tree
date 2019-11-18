
var response; //create a global variable

  //WELCOME USER
  function welcome() { //a simple function
    window.alert("Welcome!"); //alerts on page load
    }

  // GET USERS NAME
  function getName() { //a function to get the users name
      var person = prompt("Please enter your name", "Visitor"); //Visitor is the default, store input in a variable
      if (person != null) { //as long as the users input is valid,
        window.alert("Hey " + person + "! I am happy you stopped by"); //concatenate and print to the screen
      }
    }

//WHILE LOOP
while(response === "yes") { //while true
    numbers(); //run the numbers function
  }

//ADD NUMBERS
function numbers() {
  var x = prompt("Enter a Number", "0"); //store the users input in a variable
  var y = prompt("Enter another Number", "0"); //store next user input in a variable
  var num1 = parseInt(x); //turn the string inputs into integers
  var num2 = parseInt(y); //and store them in new variables
  var result = num1 + num2; //perform the addition and store as result

    if (result > 10) {
      window.alert(
      "The sum of " + num1 + " plus " + num2 + " is: " + result + ". Wow, that is a big number");
    } //close if
    else {
      window.alert(
      "The sum of " + num1 + " plus " + num2 + " is: " + result + ". Wow, that is a small number");
    } //close else
  response = prompt("Would you like to add more numbers? ", "yes"); //global variable response used here
 } //close function

//THANK USER
function thanks() { //a simple function
    if (response == "no") {
    window.alert("Thanks for visiting!"); //alerts on page load
    }
    else {
      window.alert("Alright lets keep adding");
    }
  }

  //THOUGHT IT WOULD BE FUN TO RELATE THIS WEEKS LESSON TO MY RESTAURANT PROJECT
  //so I made a tip calculator
  function tipCalculator() {
      var x = prompt("How much is the bill?", "100"); //ask for  user input and store in variable
      var y = prompt("Enter the percent you'd like to tip", "10"); //same as above
      var bill = parseInt(x); //inputs in javasctript are strings so im using parse int to turn them into integers
      var percent = parseInt(y); //and storing them in new variables
      var tip = (bill / 100) * percent; //mathematics to calculate a tip
      var tip = tip.toFixed(2); //shortening the length of output to 10.33 instead of 10.3333333333333

      if (tip != null) {
        document.getElementById("tipId").innerHTML = //insert in html where the tipId exists
        "For a $" + bill + " bill, a " + percent + "% tip is: $" + tip ; //concatenate the results to the page
      }
   } //close function

   welcome(); //call the functions so they run
   getName();
   numbers();
   thanks();

    /*
    I TRIED TO ADD A LITTLE VALIDATION LOGIC
    AND I HAVE SOME QUESTIONS ABOUT WHY THIS DOESNT WORK:
    if (num1 || num2 == null) { //if the user enters something not considered a number (for example boo!)
      window.alert("Sorry " + person + " I couldnt calculate that, please enter a valid number");
     }

     ALSO TRIED THIS:
     if (result === NaN) {
      window.alert("Sorry please try again this time using only numeric numbers!");
     }
     else {
       window.alert("The sum of your two number is: " + result + "!");
     }  
     */
