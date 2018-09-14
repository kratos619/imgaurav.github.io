$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1
    });

    $('.social-media-footer').mouseenter(function () {
        $(this).addClass("animated wobble");
    });
    $(".social-media-footer").mouseleave(function () {
        $(this).removeClass("animated wobble");
    });
    $(function () {
        $('#toggle-one').change(function () {
            if ($(this).prop('checked')) {
                console.log('You are n normal');

                //$('body').removeClass("darkmode-backgrund");
                $('body').removeClass("darkmode-backgrund");
                $('h1,h2,h3').removeClass("h2-dark_theme-color");
                $('p').removeClass("p-dark_theme-color");
            } else {
                $('body').addClass("darkmode-backgrund");
                $('h1,h2,h3').addClass("h2-dark_theme-color");
                $('p').addClass("p-dark_theme-color");
                console.log('Your n night mode');
            }

        });
    });
});