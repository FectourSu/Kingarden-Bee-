 function ajax() {
   $('.ajaxpage-2').on("click", function () {
  $('.temps').css({
    display: "block"
  });
  $('.temps-2').css({
    display: "none"
  });
  $('.ajaxpage-1').removeClass('actives');
  $('.ajaxpage-2').addClass('actives');
});

$('.ajaxpage-1').on("click", function() {
  $('.temps').css({
    display: "none"
  });
  $('.temps-2').css({
    display: "block"
  });
  $('.ajaxpage-2').removeClass('actives');
  $('.ajaxpage-1').addClass('actives');
})
 };
function nextpage(){
 $('.temps').css({
   display: "block"
 });
 $('.temps-2').css({
   display: "none"
 });
 $('.ajaxpage-1').removeClass('actives');
 $('.ajaxpage-2').addClass('actives');
};
function prevpage()
{
  $('.temps').css({
    display: "none"
  });
  $('.temps-2').css({
    display: "block"
  });
  $('.ajaxpage-2').removeClass('actives');
  $('.ajaxpage-1').addClass('actives');
};