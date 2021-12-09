window.$ = window.jQuery = require('jquery');

$(document).ready(function () {
    //Mobile menu
    $('.menu-button').on('click', function() {
        $('.navigation-mobile').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-mobile').removeClass('active');
    })
});