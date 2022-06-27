$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var x = document.activeElement;
    
    console.log(x);

    if(scroll >= 2000){
        $('#footer').fadeOut();
    } else {
        $('#footer').fadeIn();
    }
});