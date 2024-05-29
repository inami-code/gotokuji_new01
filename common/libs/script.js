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
});