"use strict";

jQuery(function ($) {

  // ------------------------------------
  //ハンバーガーメニュー
  // ------------------------------------
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-header").removeClass("is-active");
      $(".js-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".js-header").addClass("is-active");
      $(".js-nav").fadeIn(300);
    }
  });
  //中の要素をクリックすると消えてスクロールする
  $(".nav__item a").on("click", function () {
    $(".js-nav").fadeOut(300);
    $(".js-hamburger").removeClass("is-active");
    $(".js-header").removeClass("is-active");
  });

  // //  ハンバーガーメニュー展開時背景を固定
  // $(".js-hamburger,.nav__item a").click(function () {
  //   if ($("body").css("overflow") === "hidden") {
  //     $("body").css({
  //       height: "",
  //       overflow: "scroll"
  //     });
  //   } else {
  //     $("body").css({
  //       height: "100%",
  //       overflow: "hidden"
  //     });
  //   }
  // });


  $(document).ready(function () {
    let fvHeight;

    $(window).on("scroll", function () {
      fvHeight = $(".js-fv").height();
      // ファーストビューの高さを取得
      if ($(window).scrollTop() > fvHeight) {
        // スクロールの位置がファーストビューより下の場合にclassを付与
        $(".js-header").addClass("transform");
        $(".js-hamburger").addClass("transform"); // hamburger spanの色を変える
      } else {
        // スクロールの位置がファーストビューより上の場合にclassを外す
        $(".js-header").removeClass("transform");
        $(".js-hamburger").removeClass("transform"); // hamburger spanの色を元に戻す
      }
    });
  });


});
// ------------------------------------
//フェードインアニメーション
// ------------------------------------
function fadeAnime() {

  $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
  });

  $('.fadeDownTrigger').each(function () { //fadeDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
    }
  });

  $('.fadeLeftTrigger').each(function () { //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    }
  });

  $('.fadeRightTrigger').each(function () { //fadeRightTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

$(document).ready(function () {
  function checkInView() {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = windowTopPosition + windowHeight;

    $('.info__item03-img').each(function () {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = elementTopPosition + elementHeight;

      // 要素のボトムがビューポートに入っているかをチェック
      if (elementBottomPosition <= windowBottomPosition) {
        $element.addClass('fade-in');
      }
    });
  }

  // ページロード時とスクロールイベントでチェックを実行
  $(window).on('scroll resize', checkInView);
  $(window).trigger('scroll');
});


$(function() {
  $('.js-modal-open').on('click', function(e) {
     e.preventDefault();
     var target = $(this).data('target');
     $(target).fadeIn();
   });  
 
 $('.js-modal-close').on('click', function(e) {
     e.preventDefault();
     var target = $(this).data('target');
     $(target).fadeOut();
   });  
 });