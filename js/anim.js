function anim()
{
  var form = $('#contact'),
  submit = form.find('[name="submit"]');

  form.on('submit', function (e) {
  e.preventDefault();

  // avoid spamming buttons
  if (submit.attr('value') !== 'ОТПРАВИТЬ')
    return;

  var valid = true;
  form.find('input, textarea').removeClass('invalid').each(function () {
    if (!this.value) {
      $(this).addClass('invalid');
      valid = false;
    }
  });

  if (!valid) {
    form.animate({
        left: '-3em'
      }, 50)
      .animate({
        left: '3em'
      }, 100)
      .animate({
        left: '0'
      }, 50);
  } else {
    submit.attr('value', 'ОТПРАВКА...')
      .css({
        boxShadow: 'none',
        backgroundColor: '#ccc'
      });
    // simulate AJAX response
    setTimeout(function () {
      // step 1: slide labels and inputs
      // when AJAX responds with success
      // no animation for AJAX failure yet
      form.find('label')
        .animate({
          left: '100%'
        }, 500)
        .animate({
          opacity: '0'
        }, 500);
    }, 1000);
    setTimeout(function () {
      // step 2: show thank you message after step 1
      submit.attr('value', 'СПАСИБО :)')
        .css({
          boxShadow: 'none'
        });
    }, 2000);
    setTimeout(function () {
      // step 3: reset
      form.find('input, textarea').val('');
      form.find('label')
        .css({
          left: '0'
        })
        .animate({
          opacity: '1'
        }, 500);
      submit.attr('value', 'ОТПРАВИТЬ')
        .css({
          backgroundColor: ''
        });
    }, 4000);
  }
});
}