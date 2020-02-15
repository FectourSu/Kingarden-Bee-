function burger(){
  $(".mobile-link").click(function () {
    if ($('.mobile-link').hasClass('active')) {
      $('.mobile-link').removeClass('active');
      $(this).toggleClass('active');
    }
  });
  //Сверху кнопки подсветил, снизу бургер покрутил
  $("#mobile-navigation-label").click(function () {
    $('#anim-toggle').toggle('').css({
      display: 'block'
    });
  });
  //Функция анимации
  (function () {
    $("svg").click(function () {
      return $("#mobile-navigation-label").toggleClass("cross");
    });
    $("mobile-navigation-label").click(function () {
      clearInterval(i);
      return $("#mobile-navigation-label").toggleClass("cross");
    });
  }).call(this);
}