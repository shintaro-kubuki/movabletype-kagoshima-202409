$(function() {
  "use strict";

  var $win = $(window);

  if (! navigator.userAgent.match(/iphone|android(.+)?mobile/i)) {
    $('a[href^="tel:"]').on('click', function(e) {
      e.preventDefault();
    });
  }

  $('.nav a[href="' + location.href.replace(/(\?|\#).*/, '') + '"]')
    .addClass('active');

  $('.btn-top').on('click', function() {
    // スクロール
    $('html,body').animate({scrollTop: 0}, 500, 'swing');
  });

  $('a[href^=#]').on('click', function() {
    var speed = 500; //移動完了までの時間(ミリ秒)を指定
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position - 140}, speed, "swing");
    return false;
  });

  //navi-fixed
  var isNaviFixed = false;
  $win.on('load resize', function(){
    var w = $win.width();
    var x = 768;
    var $header = $('.mt-navbar');
    var $inHeader = $('.in');

    $win.off('scroll.stylishcorporate.navi-fixed');
    if (w >= x) {
      $win.on('scroll.stylishcorporate.navi-fixed', function() {
        if ($win.scrollTop() > 0) {
          if (! isNaviFixed) {
            isNaviFixed = true;
            $header.addClass('fixed');
            $inHeader.removeClass('in');
          }
        } else {
          if (isNaviFixed) {
            isNaviFixed = false;
            $header.removeClass('fixed');
            $inHeader.removeClass('in');
          }
        }
      });
    } else {
      //768px以下では無効にする
      isNaviFixed = false;
      $header.removeClass('fixed');
      $inHeader.removeClass('in');
    }
  });

  var isSubNaviFixed = false;
  $win.on('scroll.stylishcorporate.sub-navi-fixed', function() {
    if($win.scrollTop() > 306) {
      if (! isSubNaviFixed) {
        isSubNaviFixed = true;
        $('.pagessubnavi').addClass('fixed');
        $('.pages').css('margin-top', '42px');
        $('.pages-inner').css('margin-top', '100px');
      }
    }
    else {
      if (isSubNaviFixed) {
        isSubNaviFixed = false;
        $('.pagessubnavi').removeClass('fixed');
        $('.pages').css('margin-top', '');
        $('.pages-inner').css('margin-top', '');
      }
    }
  });
});
