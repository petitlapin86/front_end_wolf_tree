
//CUSTOM ERROR MESSAGES IN JS

window.onload = () => {
  const first = document.getElementById("firstName");
  const last = document.getElementById("lastName");
  const facilitator = document.getElementById("facilitator");

//FIRST NAME
//LET USER KNOW THAT NUMBERS and SYMBOLS ARE NOT ACCEPTED + length requirement
  first.addEventListener("input", e => {
    if (first.validity.patternMismatch) { //using validity state
      first.setCustomValidity("Please enter at least 2 characters and only alphabet characters!");
    } else {
      first.setCustomValidity("");
    }
  });

//LAST NAME
//LET USER KNOW THAT NUMBERS and SYMBOLS ARE NOT ACCEPTED + length requirement
  last.addEventListener("input", e => {
    if (last.validity.patternMismatch) { //using validity state
      last.setCustomValidity("Please enter at least 2 characters and only alphabet characters!");
    } else {
      last.setCustomValidity("");
    }
  });

  facilitator.addEventListener("input", e => {
    if (facilitator.validity.patternMismatch) {
      facilitator.setCustomValidity("enter exactly Josh, Harsh or Laura");
    } else {
      facilitator.setCustomValidity("");
    }
  });
};
