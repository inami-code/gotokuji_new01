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


  $(document).ready(function () {
    // 要素を取得
    const $modal = $('.js-modal'),
      $open = $('.js-modal-open'),
      $close = $('.js-modal-close'),
      $overlay = $('.modal-overlay');

    let isFirstOpen = true;

    // モーダルを開くときにスライダーをリセット
    function modalOpen() {
      $modal.addClass('is-active');
      $overlay.addClass('is-active');
      if (isFirstOpen) {
        swiper01.slideTo(0, 0, false);
        isFirstOpen = false;
      }
      swiper01.autoplay.start();
    }
    $open.on('click', modalOpen);

    // モーダルを閉じる
    function modalClose() {
      $modal.removeClass('is-active');
      $overlay.removeClass('is-active');
    }
    $close.on('click', modalClose);
    $overlay.on('click', modalClose);

    // モーダルの外側をクリックしてモーダルを閉じる
    function modalOut(e) {
      if ($(e.target).is($modal)) {
        $modal.removeClass('is-active');
        $overlay.removeClass('is-active');
      }
    }
    $(document).on('click', modalOut);
  });
});
