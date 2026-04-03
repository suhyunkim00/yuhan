$(function () {
  const body = "body";

  // 소셜
  $(window).resize(function(){
    updateCSRImages();
  });
  
  function updateCSRImages() {
    if ($(body).hasClass("mo")) { // 모바일
      $('.main-img-csrStr').attr('src', './images/y_social/y_social1_mo.png');
      $('.main-img-csrSys').attr('src', './images/y_social/y_social2_mo.jpg');
    } else { // 태블릿 이상
      $('.main-img-csrStr').attr('src', './images/y_social/y_social1_pc.png');
      $('.main-img-csrSys').attr('src', './images/y_social/y_social2_pc.jpg');
    }
  }

  // 환경경영

  // 윤리경영

});