$(function () {
  //변수
  const body = "body";
  const hd = "#yh-hd";
  const ft = "#yh-ft";
  const mainMenu = ".depth1";
  const subMenu = ".depth2-wrap";
  const stiemapBtn = ".sitemap-btn";
  const sitemap = ".mo-gnb-sitemap";
  const btnClose = ".btn-close";
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2";
  const blankAnchor = "a[href='#']";

  // 반응형 구현
  rwd();
  $(window).resize(function(){
    rwd();
  });

  // 언어선택
  $(".lang-btn").click(function(){
    $(this).next().slideToggle(300);
  });

   // PC GNB 구현 : depth1에 마우스가 진입하면 depth2가 슬라이드다운
  $(mainMenu).mouseenter(function(){
    $(this).children(subMenu).stop().slideDown(300);
  });
  // PC GNB 구현 : depth1에 마우스가 떠나면 depth2가 슬라이드업
  $(mainMenu).mouseleave(function(){
    $(this).children(subMenu).stop().slideUp(300);
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
    if($(body).hasClass("mo") || $(body).hasClass("tb")){ //모바일 해상도에서면 실행
      e.preventDefault(); //<a>의 링크 기능 실행 막기
      $(this).parent().siblings().find(smSubMenu).stop().slideUp(300);
      $(this).next().stop().slideToggle(300);
      $(this).parent().toggleClass("active"); // 화살표 회전을 위해 필요
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

});