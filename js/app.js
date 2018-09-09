$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1
    });

    $('.d-care').hover(function () {
        $(this).css("background-color", "yellow");
    }, function () {
        $(this).css("background-color", "white");
    });
});