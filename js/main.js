/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5bc0e4',
    lineColor: '#5bc0e4'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});

(function () {
  var mainNav = $('.main_nav');
  var mainHeader = $('.main_header');
  var mainNavTop =  mainHeader.height();
  var mainNavHeader = mainNav.height();
  $(window).resize(function() {
    mainNavTop =  mainHeader.height();
    mainNavHeader = mainNav.height();
  });
  $(window).scroll(function () {
    if(document.body.scrollTop > mainNavTop){
      mainHeader.css('margin-bottom', mainNavHeader + 35);
      mainNav.css({
        position: 'fixed',
        top: 0
      });
    }else{
      mainNav.css({
        position: 'initial'
      });
      mainHeader.css('margin-bottom', 0);
    }
  });
})();

// 回到顶部

(function () {
  var onTop = $('#onTop');
  $(window).scroll(function (){
    document.body.scrollTop > 200 ? onTop.css('display', 'block') : onTop.css('display', 'none');
  });
  onTop.click(function () {
    $('body').animate({
      scrollTop: 0
    }, 'slow')
  });
})();
