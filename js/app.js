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

});