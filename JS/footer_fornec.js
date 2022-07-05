$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (window.matchMedia("(max-width:840px)").matches) {
        if(scroll >= 2000){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    } else if(window.matchMedia("(min-width:1200px)").matches){
        if(scroll >= 1500){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    } else if(window.matchMedia("(min-width:1060px)").matches) {
        if(scroll >= 2150){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    } else {
        if(scroll >= 1700){
            $('#footer').fadeOut();
        } else {
            $('#footer').fadeIn();
        }
    }
});