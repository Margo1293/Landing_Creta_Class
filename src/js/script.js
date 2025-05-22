
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,

  // Navigation arrows
    navigation: {
        nextEl: '.sliderBlockNext',
        prevEl: '.sliderBlockPrev',
    },

    pagination: {
        el: ".sliderBlockPag",
        clickable: true,
      },

});

function tabs(tabsBlockSelector) {
	const tabsNavAll = document.querySelectorAll(`${tabsBlockSelector} [data-tab]`);
	const tabsContentAll = document.querySelectorAll(`${tabsBlockSelector} [tabs_content]`);

	tabsNavAll.forEach(function (item) {
		item.addEventListener('click', function (event) {
			if (item.classList.contains('active')) return;

			tabsNavAll.forEach((i) => {
				i.classList.remove('active');
			});
			item.classList.add('active');

			tabsContentAll.forEach((k) => {
				k.classList.remove('active');
			});
			const dataTab = event.target.dataset.tab;
			document.querySelector(`[tabs_content]#${dataTab}`).classList.add('active');
		});
	});
}

tabs('.tabs__block');

function accordion(accordionBlockSelector) {
	const accordionTitleAll = document.querySelectorAll(`${accordionBlockSelector} [data-accordion-title]`);

	accordionTitleAll.forEach(function (item) {
		item.addEventListener('click', function () {
			if (!item.classList.contains('active')) {
				accordionTitleAll.forEach(function (i) {
					i.classList.remove('active');
				});
			}

			item.classList.toggle('active');
		});
	});
}

accordion('.accordion__block');