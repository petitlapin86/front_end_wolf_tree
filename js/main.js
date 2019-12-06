
// JAVASCRIPT FUNCTIONALITY TO SHOW POPUP ON NYE BADGE CLICK (INDEX PAGE LINE 36)
$(document).ready(function(){
    function showPopup(whichpopup){
     var docHeight = $(document).height();
     var scrollTop = $(window).scrollTop();
     $('.overlay-bg').show().css({'height' : docHeight});
     $('.popup'+whichpopup).show().css({'top': scrollTop+20+'px'});
    }
    // function to close our popups
    function closePopup(){
        $('.overlay-bg, .overlay-content').hide();
    }
    $('.show-popup').click(function(event){
        event.preventDefault();
        var selectedPopup = $(this).data('showpopup');
        showPopup(selectedPopup);
    });
    $('.close-btn, .overlay-bg').click(function(){
        closePopup();
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closePopup();
        }
    });
});


window.onload=function(){

//FUNCTIONALITY TO SHOW JSON DATA ON BUTTON CLICK (MENU PAGE LINE 88)
const btn = document.getElementById('jsonOnClick'); //create a variable for the html button

// MY FUNCTION TO DISPLAY JSON
function createTable(jsonObject) {
    let tableArray =[]; //empty array to start
    jsonObject.purveyors.forEach(function(property){ //iterate through json object (which is called purveyors)
        tableArray.push( //and push that data into an array
            `<tr>
                <td>${property.Company}</td>
                <td>${property.Location}</td>
                <td>${property.Item}</td>
                </tr>`); //telling my function to display each key/value pair
    });
    return tableArray; //return the complete table
}

const getDegreeData = () => {
    const xhr = new XMLHttpRequest(); // Create XML request object
    // Use XMLHttpRequest method open to initialize newly created request or reinitialize and existing request

    xhr.open('get', 'data/purveyors.json', true); //params: method, location, asynchronous request
    // onreadystatechange method is triggered every time the ready state changes on the page
    xhr.onreadystatechange = function() {
        if((xhr.readyState === 4) && xhr.status === 200){
            const response = JSON.parse(xhr.responseText); //response from XMLHttpRequest
            let newTable = createTable(response); //create a new table with the parsed json data
            let tableString = newTable.join('');
            btn.insertAdjacentHTML('beforebegin', `<table>${tableString}</table>`);
            btn.style.display = 'none'; //hide the purveyors button once data displays
        }
    };
    // Open initializes the request, and send actually sends it
    // Automatic Trashcan analogy: open is equivalent to trashcan opening and send is actually throwing something in the trash
    xhr.send();
};

btn.addEventListener('click', getDegreeData); //listen for users click of the button

}
