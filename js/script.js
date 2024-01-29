$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        smartSpeed: 450,
        loop: true,
        autoplay: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false

    });

    $(".owl-carousel").mouseenter(function() {
        $(".owl-nav").fadeIn();
    });

    $(".owl-carousel").mouseleave(function() {
        $(".owl-nav").fadeOut();
    });

    $(".hover-effects").each(function() {
        $(this).find('li a').each(function() {
            var bgColor = $(this).attr('data-color');
            $(this).mouseover(function(event) {
                $(this).css({ 'background': bgColor, "color": "#fff" });
            });
            $(this).mouseout(function() {
                $(this).css({ 'background': "#fff", "color": "#2f2313" });
            });

        });
    });

    $(".footer-hover").each(function() {
        $(this).find('li a').each(function() {
            var bgColor = $(this).attr('data-color');
            $(this).mouseover(function(event) {
                $(this).css({ 'background': bgColor, "color": "#fff" });
            });

            $(this).mouseout(function() {
                $(this).css({ 'background': "#333333", "color": "#fff" });
            });

        });
    });


});