window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination]);

$(document).ready(function () {
    //Mobile menu
    $('.menu-button').on('click', function() {
        $('.navigation-mobile').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-mobile').removeClass('active');
    })

    //Anchor links
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

    //About swiper

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

    //Clients swiper
    const clients_swiper = new Swiper('.clients__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            autoheight: true

        },
    });

     //Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();
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