function hover(){
$("#img ").hover(
      function () {
        $(this).attr("src", "source/upOne.png");
      },
      function () {
        $(this).attr("src", "source/upTwo.png");
      });
    $("#imginvert1").hover(
      function () {
        $(this).attr("src", "source/инста.png");
      },
      function () {
        $(this).attr("src", "source/иб.png");
      });
    $("#imginvert2").hover(
      function () {
        $(this).attr("src", "source/вк.png");
      },
      function () {
        $(this).attr("src", "source/вб.png");
      });
    $("#imginvert3").hover(
      function () {
        $(this).attr("src", "source/фейсбук.png");
      },
      function () {
        $(this).attr("src", "source/фб.png");
      });

    function backTOP() {
      //Логика анимации (и якоря вверх)
      let = button = $('#img')
      $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
          button.fadeIn(); //виден
          $('.position-button').fadeIn();
        } else {
          button.fadeOut(); //скрыт
          $('.position-button').fadeOut();
        }
      });
      button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({
          scrollTop: 0
        }, 1500); //скорость анимации якоря
      });
    }
    backTOP();
  };