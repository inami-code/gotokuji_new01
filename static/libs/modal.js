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
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
});



// ------------------------------------
// # modal 招き猫ページ
// ------------------------------------

$(document).ready(function() {
  // 要素を取得
  const $modal = $('.js-modal'),
        $open = $('.js-modal-open'),
        $close = $('.js-modal-close'),
        $overlay = $('.modal-overlay');

  // 「開くボタン」をクリックしてモーダルを開く
  function modalOpen() {
    $modal.addClass('is-active');
    $overlay.addClass('is-active');
  }
  $open.on('click', modalOpen);

  // 「閉じるボタン」をクリックしてモーダルを閉じる
  function modalClose() {
    $modal.removeClass('is-active');
    $overlay.removeClass('is-active');
  }
  $close.on('click', modalClose);
  $overlay.on('click', modalClose);

  // 「モーダルの外側」をクリックしてモーダルを閉じる
  function modalOut(e) {
    if ($(e.target).is($modal)) {
      $modal.removeClass('is-active');
      $overlay.removeClass('is-active');
    }
  }
  $(document).on('click', modalOut);
});


// $(function() {
//   $('.js-modal-open').on('click', function(e) {
//     e.preventDefault();
//     var target = $(this).data('target');
//     $(target).addClass('modal--visible');
//     $('.modal-overlay').addClass('modal-overlay--visible');
//   });  

//   $('.js-modal-close').on('click', function(e) {
//     e.preventDefault();
//     var target = $(this).data('target');
//     $(target).removeClass('modal--visible');
//     $('.modal-overlay').removeClass('modal-overlay--visible');
//   });  
// });

});