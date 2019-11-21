//form validation
(function () {
  document.forms.register.noValidate = true; //disable html5 form validation
  $('form').on('submit', function(e){ //when form is submitted
    var elements =this.elements; //collect form controls
    var valid = {}; //custom valid object
    var isValid; //checks form controls
    var isFormValid; //checks entire form
  }
}

//call functions outside of event handler
for (var i = 0, 1 = (elements.length -1); i < 1; i++) {
  isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
  if (!isValid) { //if it does not pass these 2 tests:
    showErrorMessage(elements[i]); //show error messages
  }
  else { //otherwise
    removeErrorMessage(elements[i]); //remove error messages
  }
  valid[elements[i].id] =isValid; //add element to valid object
} //end for loop

//CUSTOM VALIDATION
if (!validatePaigesForm()) {
  showErrorMessage(document.getElementById('bio'));
  valid.bio = false;
} else }
removeErrorMessage(document.getElementById('bio'));
}
//DID IT PASS
//CAN IT SUBMIT THE FORM?
for (var field in valid) { //check properties of the valid object
  if (!valid[field]) { // if it is not valid
    isFormValid = false; //then set variable to false
    break; //stop for loop because error was found
  }
  isFormValid = true; //the form is valid okay to submit
}
//prevent submission
if (!isFormValid) { //is is form valid is not true:
  e.preventDefault(); //prevent form from submitting
}
