
/* To Do List:
*  1) edit facilitatorList names
*  2) make incorrect fields turn red
* */

const BTN = document.getElementById('submit');
const facilitatorList = ['Chris', 'Fazil', 'Josh'];

// Check if first and last name inputs meet the form submission requirements
function validateInput(checkInput) {
    if (checkInput.length >= 2 && /^[a-zA-Z]+$/.test(checkInput)) {
        return true;
    } else
        return false;
}

// Validation functions should only occur after the user clicks on the submit button
BTN.onclick = fun ction(){
    // Remove any pre-existing error messages
    let errors = document.getElementsByClassName("errorMessage");
    while(errors.length > 0){
        errors[0].remove();
    }

    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let facilitator = document.querySelector("#facilitator");
    let nameFields = document.querySelector("#nameFields");

    let firstNameVal = document.getElementById('firstName').value;
    let lastNameVal = document.getElementById('lastName').value;
    let facilitatorVal = document.getElementById('facilitator').value;
    let truthValue = true;

    // create function that checks facilitator input against facilitator list
    if(facilitatorList.indexOf(facilitatorVal) === -1) {
        facilitator.className = "errorFocus";
        truthValue = false;
        nameFields.insertAdjacentHTML('afterend',
            "<p class='errorMessage'>Facilitator must be the first name of an active CS601 facilitator.</p>")
    } else {
        facilitator.className = "";
    }

    if (validateInput(lastNameVal) === false) {
        lastName.className = "errorFocus";
        truthValue = false;
        nameFields.insertAdjacentHTML('afterend',
            "<p class='errorMessage'>Last name must be at least two characters and can only consist of alpha characters.</p>")
    } else {
        lastName.className = "";
    }

    if (validateInput(firstNameVal)=== false) {
        firstName.className = "errorFocus";
        truthValue = false;
        nameFields.insertAdjacentHTML('afterend',
            "<p class='errorMessage'>First name must be at least two characters and can only consist of alpha characters.</p>")
    } else {
        firstName.className = "";
    }

    if(truthValue === false){
        event.preventDefault();
    }
};
