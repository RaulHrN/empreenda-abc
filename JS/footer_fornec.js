$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (window.matchMedia("(max-width:640px)").matches) {
        if(scroll >= 3700){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    } else if(window.matchMedia("(max-width:1200px)").matches){
        if(scroll >= 2400){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    } else {
        if(scroll >= 2000){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    }
});