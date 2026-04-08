$(document).ready(function() {
  const dt = $(".yh-rule-dl dt");

  dt.click(function(){
    $(this).parent().siblings().children("dd").slideUp(300);
    $(this).next().slideToggle(300);

    var $icon = $(this).find('i');

    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $icon.removeClass('fa-circle-plus').addClass('fa-circle-minus');
    } else {
      $icon.removeClass('fa-circle-minus').addClass('fa-circle-plus');
    }
  });
});