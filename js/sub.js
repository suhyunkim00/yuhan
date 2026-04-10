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

  function changeImg() {
    const body = $('body');
    const img = $('.philosophy-img');

    if (body.hasClass('pc')) {
      img.attr('src', './images/y_info/기업이념.svg');
    } else if (body.hasClass('tb')) {
      img.attr('src', './images/y_info/기업이념_tb.svg');
    } else {
      img.attr('src', './images/y_info/기업이념_mo.svg');
    }
  }

  // 최초 실행
  changeImg();

  // resize 시에도 실행 (body class 바뀌니까)
  $(window).on('resize', function () {
    changeImg();
  });
});