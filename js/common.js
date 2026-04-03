$(function () {
  //변수
  const body = "body";
  const hd = $(".yh-hd");
  const ft = $("#yh-ft-pc");
  const hdBg = ".wh-bg";
  const hdBgGnb = ".wh-bg-gnb";
  const gnb = "#yh-gnb";
  const mainMenu = ".depth1";
  const subMenu = ".depth2-wrap";
  const stiemapBtn = ".sitemap-btn";
  const sitemap = ".mo-gnb-sitemap";
  const btnClose = ".btn-close";
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2";
  const blankAnchor = "a[href='#']";
  const spare = 60;
  let scTop = $(window).scrollTop();
  let hdHeight = hd.height();
  let ftOffset = ft.offset().top - 200;

  
  // 반응형 구현
  rwd();
  $(window).resize(function(){
    rwd();
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



  // gnb 흰 배경
  let d2Height = [];
  $(".yh-gnb > .depth1").each(function(){
    let num = $(this).index();
    //console.log(num);
    d2Height[num] = $(this).find(".depth2").height();
  });
  $(subMenu).hide();
  console.log(d2Height);
  // PC GNB 구현 : depth1에 마우스가 진입하면 depth2가 슬라이드다운
  let idx;
  $(hd).mouseenter(function() {
    $(this).addClass("yh-hd-wh"); // 흰색 테마 클래스 추가
    $(hdBg).stop().animate({ opacity: 1 }, 150);
  });
  $(hd).mouseleave(function() {
    // 서브메뉴가 열려있지 않을 때만 클래스 제거 (선택 사항)
    $(this).removeClass("yh-hd-wh"); 
    $(hdBg).stop().animate({ opacity: 0 }, 150);
    $(hdBgGnb).stop().css("height", 0);
    $(subMenu).stop().slideUp(300);
  });
  $(mainMenu).mouseenter(function() {
    idx = $(this).index(); 
    //console.log(idx);  
    if(idx == $(mainMenu).length - 1) {
      $(hdBgGnb).stop().css("height", 0);
    } else {
      $(this).siblings().find(subMenu).stop().slideUp(300);
      $(this).find(subMenu).stop().slideDown(300);
      $(hdBgGnb).stop().css("height", d2Height[idx] + spare);
    }
  });
  $(hdBgGnb).mouseleave(function() {
    $(subMenu).stop().slideUp(300);
    $(this).stop().css("height", 0);
  });

});