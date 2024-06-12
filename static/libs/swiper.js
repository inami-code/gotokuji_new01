"use strict";

jQuery(function ($) {
// ------------------------------------
// # swiper 招き猫ページ
// ------------------------------------

const swiper01 = new Swiper(".js-modal-swiper", {
  loop: true,
  speed: 1500, //スライドの速度
  effect: "fade",
  autoplay: {
    // 自動再生
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
});


});
