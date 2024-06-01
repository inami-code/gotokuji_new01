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

  //  ハンバーガーメニュー展開時背景を固定
  $(".js-hamburger,.nav__item a").click(function () {
    if ($("body").css("overflow") === "hidden") {
      $("body").css({
        height: "",
        overflow: "scroll"
      });
    } else {
      $("body").css({
        height: "100%",
        overflow: "hidden"
      });
    }
  });


  $(document).ready(function () {
    // mvHeightをイベントハンドラの外側で宣言
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