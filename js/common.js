$(function () {
  //변수
  const body = "body";
  const mainMenu = ".depth1";
  const subMenu = ".depth2-wrap";
  const stiemapBtn = ".sitemap-btn";
  const sitemap = ".mo-gnb-sitemap";
  const btnClose = ".btn-close";
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2";
  const blankAnchor = "a[href='#']";
  let scTop = $(window).scrollTop();

  // 반응형 구현
  rwd();
  $(window).resize(function(){
    rwd();
  });

  // PC GNB 구현 : depth1에 마우스가 진입하면 depth2가 슬라이드다운
  $(mainMenu).mouseenter(function() {
    $(this).find(subMenu).stop().slideDown(300);
  });
  $(mainMenu).mouseleave(function() {
    $(this).find(subMenu).stop().slideUp(300);
  });
  
  // 언어선택
  $(".lang-btn").click(function(){
    $(this).next().slideToggle(300);
  });
  // 모바일푸터 패밀리사이트 버튼
  $(".ft-site-btn-mo").click(function(){
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass("active"); //화살표 회전
  });
  // 모바일푸터 gnb 버튼
  $(".ft-depth1-mo > a").click(function(e) {
  e.preventDefault(); // <a> 태그의 기본 링크 이동 막기
  $(this).parent().siblings().find(".ft-depth2-mo").stop().slideUp(300);
  $(this).parent().siblings().removeClass("active");
  $(this).next().stop().slideToggle(300);
  $(this).parent().toggleClass("active");
  });
  // pc푸터 패밀리사이트 버튼
  $(".ft-site-btn").click(function(){
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass("active"); //화살표 회전
  });
  
  // 사이트맵
  $(stiemapBtn).click(function(){
    $(body).addClass("fixed");
    $(sitemap).addClass("on");
  });
  $(btnClose).click(function(){
    $(body).removeClass("fixed");
    $(sitemap).removeClass("on");
  });

   // 모바일 메뉴 펼치기/접기
  $(smMainMenu).click(function(e) {
    if($(body).hasClass("mo")){ //모바일 해상도에서면 실행
      e.preventDefault();
      $(this).parent().siblings().find(smSubMenu).stop().slideUp(300);
      $(this).next().stop().slideToggle(300);
      $(this).parent().toggleClass("active");
    }
  });

  // 임시링크 실행 막기
  $(blankAnchor).click(function(e){
    e.preventDefault();
  });

  // 사용자 함수
  function rwd() {
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    // console.log(viewportW, viewportH);
    if(viewportW < 768){
      $(body).removeClass("tb pc").addClass("mo");
    } else if(viewportW >= 768 && viewportW < 1280 ){
      $(body).removeClass("mo pc").addClass("tb");
    } else {
      $(body).removeClass("mo tb").addClass("pc");
    }
    $(smSubMenu).attr("style","");
  }

//   $(function() {
//   // 헤더 전체에 마우스 진입 시
//   $('.yh-hd').mouseenter(function() {
//     $(this).addClass('active');
//     $('.yh-logo img').attr('src', '../images/y_logo_bk.svg'); 
//   });
//   // 헤더에서 마우스가 나갈 때
//   $('.yh-hd').mouseleave(function() {
//     $(this).removeClass('active');
//     $('.yh-logo img').attr('src', 'images/y_logo_wh.svg');
//   });
// });

  // 헤더 제어
  const hd = $(".yh-hd");
  const ft = $("#yh-ft-pc");
  let hdHeight = hd.height();
  let ftOffset = ft.offset().top - 200;

  //console.log(scTop);
  $(window).scroll(function(){
    scTop = $(window).scrollTop();
    if(scTop > hdHeight) { //헤더만큼 스크롤 됐을 때
      hd.addClass("fixed");
    } else {
      hd.removeClass("fixed");
    }
    // 푸터가 화면에 표시 될 때쯤 헤더 숨기기
    if(scTop > ftOffset){
      hd.fadeOut(300);
    } else {
      hd.fadeIn(300);
    }
  });

});