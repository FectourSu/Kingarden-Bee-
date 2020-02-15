function menu(tag){

      $('.header-menu__link').hover(function () {
        if ($('.header-menu__link').hasClass('active-link')) {
          $('.header-menu__link').removeClass('active-link');
        } else
          $(tag).addClass('active-link');
      });
}