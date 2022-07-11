import { auto } from '@popperjs/core';
import Swiper, {} from 'swiper';
Swiper.use([]);
const swiper = new Swiper('.playlists__tabs', {
    slidesPerView: auto,
    spaceBetween: 15,
});
