var footer = $('#footer');
$(window).scroll(function() {
    // Distancia do scroll
    var scrollTop = $(window).scrollTop(),

        // Distancia da div "alvo" do topo
        formDiv = $('#footer').offset().top,

        // Diferença entre o scroll já percorrido 
        // pela distancia da div "alvo" do topo
        distance = (scrollTop - formDiv);

    if(distance > -300) { 
    // Se a distancia do topo passou em 300px a distancia da div "alvo" do topo
       footer.fadeOut('fast');
    } else {
       footer.fadeIn('fast');
    }
});