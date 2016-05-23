"use strict";

define(['zepto.min', 'swiper.jquery.min'], function ($, Swiper) {
  $(document).ready(function () {
    // 首页头部轮播
    var indexTopSwiper = new Swiper('#index-top-swiper', {
      loop: true,
      pagination: '.swiper-pagination',
      autoplay: 3000
    });
    // 公告轮播
    var indexTopSwiper = new Swiper('#index-announcement', {
      loop: true,
      direction: 'vertical',
      autoplay: 3000
    });
    // 中间的banner轮播
    var indexTopSwiper = new Swiper('#index-sub-banner', {
      loop: true,
      pagination: '.swiper-pagination',
      autoplay: 3000
    });

    // 猜你喜欢的toggle点击
    $('#index-toggle-btn').on('touchstart', function (e) {
      e.preventDefault();
      $(this).toggleClass('cur');
      $('#guess-like-con').toggleClass('cur');
    });

    // 滚动变色
    scrollChangeCol();
    function scrollChangeCol() {
      var headerBar = document.querySelector('.header-info-wrap header');
      var headerBarH = headerBar.offsetHeight;
      var font1 = headerBar.querySelector('.header-city-select .iconfont');
      var font2 = headerBar.querySelector('.header-cart .iconfont');
      var search = headerBar.querySelector('.header-search a');
      var searchDiv = search.querySelector('div');
      var rate = 0;
      window.onscroll = function () {
        var top = document.body.scrollTop;
        var opacity = 0;
        rate = top / headerBarH;
        if (top > headerBarH) {
          opacity = 0.8;
          rate = 1;
          $(headerBar).addClass('bd-b');
          search.style.backgroundColor = "rgb(255,255,255)";
          $(searchDiv).addClass('bd-all');
        } else {
          opacity = 0.9 * (top / headerBarH);
          rate = top / headerBarH;
          if ($(headerBar).has('bd-b')) {
            $(headerBar).removeClass('bd-b');
          }
          if ($(searchDiv).has('bd-all')) {
            $(searchDiv).removeClass('bd-all');
          }
          search.style.backgroundColor = "rgb(" + (255 - 28 * (1 - rate)) + "," + (255 - 35 * (1 - rate)) + ",252)";
        }
        headerBar.style.background = "rgba(255,255,255," + opacity + ")";
        headerBar.style.color = "rgb(255," + (255 - 192 * rate) + "," + (255 - 192 * rate) + ")";
        font1.style.color = "rgb(255," + (255 - 192 * rate) + "," + (255 - 192 * rate) + ")";
        font2.style.color = "rgb(255," + (255 - 192 * rate) + "," + (255 - 192 * rate) + ")";
      };
    }

    // 搜索框点击弹出
    searchBar();
    function searchBar() {
      $('#header-search-click').on('touchstart', function () {
        $('html').css('overflow', 'hidden');
        $('.search-part').addClass('cur');
        setTimeout(function () {
          $('#search-content').focus();
        }, 500);
      });
      $('.search-part .back-btn').on('touchstart', function () {
        $('html').css('overflow', 'auto');
        $('.search-part').removeClass('cur');
      });
    }
  });
});

//# sourceMappingURL=index-compiled.js.map