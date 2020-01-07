'use strict';

$(window).on('load', function() {
    /*------------------
        Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});

(function($) {
    /*------------------
        Navigation
    --------------------*/
    $('.nav_switch').on('click', function() {
        $('.main_site_warp').addClass('push_side');
        $('body').addClass('push_side');
        setTimeout(function() {
            hero_section();
        }, 400)

    });
    $('.close_menu').on('click', function() {
        $('.main_site_warp').removeClass('push_side');
        setTimeout(function() {
            $('body').removeClass('push_side');
        }, 400);
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /*------------------
       Custom Scrollbar
    --------------------*/
    function site_scrollbar() {

        if ($(window).width() > 991) {
            $(".content_sidebar").niceScroll({
                cursorborder: "",
                cursorcolor: "#f1f1f1",
                boxzoom: false,
                cursorwidth: 4,
                cursorborderradius: 0,
            });
        }
    }
    site_scrollbar();

    /*------------------
       gallery
    --------------------*/
    function hero_section() {
        if ($(window).width() > 768) {

            var ps_w = $('.gallery').innerWidth();
            $('.gallery_item').width(ps_w / 2);
            var trackW = (($('.gallery_item').width()) * $('.gallery_item').length) + ($('.gallery_item').length * 50);
            $('.gallery_s').width(trackW);

            var hs_width = $(window).innerHeight() - 170;
            $('.gallery_item').height(hs_width);

            $(".gallery_left").niceScroll({
                cursorborder: "",
                cursorcolor: "#242424",
                boxzoom: false,
                cursorwidth: 4,
                autohidemode: false,
                background: '#eeeeee',
                cursorborderradius: 0,
                railoffset: { top: 0, right: 50, left: 0, bottom: 0 },
                railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
            });
        }
        if ($(window).width() < 768) {
            $('.gallery_s').addClass('owl-carousel')
            $('.gallery_s').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                dots: false,
                margin: 30,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            });
        }
    }

    hero_section();

    $(window).resize(function() {
        hero_section();
        site_scrollbar();
    });

})(jQuery);