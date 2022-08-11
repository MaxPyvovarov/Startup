import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

window.addEventListener('DOMContentLoaded', () => {
	//Mobile menu
	const menuButton = document.querySelector('.menu-button'),
		closeMenuButton = document.querySelector('.close-menu'),
		navMobile = document.querySelector('.navigation-mobile');

	menuButton.addEventListener('click', () => {
		navMobile.classList.add('active');
	});

	closeMenuButton.addEventListener('click', () => {
		navMobile.classList.remove('active');
	});

	//Sticky header
	const headerHeight = document.querySelector('.wrapper-fixed').offsetHeight,
		bannerHeight = document.querySelector('#header').offsetHeight,
		wrapperFixed = document.querySelector('.wrapper-fixed');

	window.addEventListener('scroll', () => {
		if (window.scrollY >= bannerHeight - headerHeight) {
			wrapperFixed.classList.add('sticky');
			console.log('added sticky');
		} else {
			wrapperFixed.classList.remove('sticky');
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
		simulateTouch: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},

			1224: {
				slidesPerView: 4,
				spaceBetween: 30,
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
			autoheight: true,
		},
	});

	//Tabs
	function tabs(
		tabsSelector,
		tabsContentSelector,
		tabsParentSelector,
		activeClass
	) {
		const tabs = document.querySelectorAll(tabsSelector),
			tabsContent = document.querySelectorAll(tabsContentSelector),
			tabsParent = document.querySelector(tabsParentSelector);

		function hideTabContent() {
			tabsContent.forEach((tab) => {
				tab.classList.remove('active', 'fade');
			});

			tabs.forEach((tab) => {
				tab.classList.remove(activeClass);
			});
		}

		function showTabContent(i = 0) {
			tabsContent[i].classList.add('active', 'fade');
			tabs[i].classList.add(activeClass);
		}

		hideTabContent();
		showTabContent();

		tabsParent.addEventListener('click', (event) => {
			const target = event.target;

			if (target && target.classList.contains(tabsSelector.slice(1))) {
				tabs.forEach((tab, i) => {
					if (tab === target) {
						hideTabContent();
						showTabContent(i);
					}
				});
			}
		});
	}

	tabs('.tabs__button', '.tabs__item', '.tabs__buttons', 'active');
});
