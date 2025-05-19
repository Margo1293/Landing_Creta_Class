
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
