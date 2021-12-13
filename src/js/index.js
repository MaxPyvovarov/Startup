window.$ = window.jQuery = require('jquery');
import Swiper, {Navigation} from 'swiper';

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
        // event.preventDefault();
        // var id  = $(this).attr('href'),
        // top = $(id).offset().top;
        // $('body,html').animate({scrollTop: top}, 700);
    });

    const swiper = new Swiper('#about .swiper', {
        loop: true,
        autoplay: {
        delay: 5000,
          },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
      });
});