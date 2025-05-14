const body = document.querySelector('body');

import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
