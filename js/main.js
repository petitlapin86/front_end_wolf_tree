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
