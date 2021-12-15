window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([ Autoplay, Navigation ]);

$(document).ready(function () {
    //Mobile menu
    $('.menu-button').on('click', function() {
        $('.navigation-mobile').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-mobile').removeClass('active');
    })

    //Smooth scroll
    $('a').on("click", function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    const swiper = new Swiper('#about .swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30
              },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            
            1224: {
              slidesPerView: 4,
              spaceBetween: 30
            },
        },
    });
});

$(window).scroll(function () {
    const headerHeight = $('.wrapper-fixed').outerHeight();
    const bannerHeight = $('.header').outerHeight();
    if($(window).scrollTop() >= (bannerHeight - headerHeight)) {
        $('.wrapper-fixed').addClass('sticky');
        console.log('hello');
    }
    else {
        $('.wrapper-fixed').removeClass('sticky');
    }
})