// Nav Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('colorize');
    }

    else {
          $('nav').removeClass('colorize');
    }
})