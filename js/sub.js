$(document).ready(function() {
  AOS.init();
  const dt = $(".yh-rule-dl dt");
  const body = $('body');

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
    const philosophyImg = $('.philosophy-img');
    const roadmapImg = $('.roadmap-img');
    const missionImg = $('.mission-img');
    const strategyImg = $('.strategy-img');

    if (body.hasClass('pc')) {
      philosophyImg.attr('src', './images/y_info/기업이념.svg');
      roadmapImg.attr('src', './images/y_vision/roadmap_pc.svg');
      missionImg.attr('src', './images/y_vision/mission_pc.svg');
      strategyImg.attr('src', './images/y_vision/strategy_pc.svg');
    } else if (body.hasClass('tb')) {
      philosophyImg.attr('src', './images/y_info/기업이념_tb.svg');
      roadmapImg.attr('src', './images/y_vision/roadmap_tb.svg');
      missionImg.attr('src', './images/y_vision/mission_tb.svg');
      strategyImg.attr('src', './images/y_vision/strategy_pc.svg');
    } else {
      philosophyImg.attr('src', './images/y_info/기업이념_mo.svg');
      roadmapImg.attr('src', './images/y_vision/roadmap_mo.svg');
      missionImg.attr('src', './images/y_vision/mission_mo.svg');
      strategyImg.attr('src', './images/y_vision/strategy_mo.svg');
    }
  }

  // 모바일에서 생성된 swiper 인스턴스들을 저장할 배열
  var productSwipers = [];

  /*
    모바일이면 swiper 생성
    태블릿/PC면 swiper 제거
  */
  function initSwiper() {
    // body에 mo 클래스가 있고, 아직 swiper가 생성되지 않았을 때만 실행
    if ($('body').hasClass('mo') && productSwipers.length === 0) {
      $('.product-swiper').each(function (index, el) {
        // 각 .product-swiper마다 swiper 생성
        var swiper = new Swiper(el, {
          slidesPerView: 1,          // 한 번에 1개씩 보이게
          spaceBetween: 10,          // 슬라이드 사이 간격
          centeredSlides: true,      // 가운데 정렬
          loop: true,                // 무한 반복
          observer: true,            // DOM 변화 감지
          observeParents: true       // 부모 display 변화 감지
        });

        // 생성된 swiper를 배열에 저장
        productSwipers.push(swiper);
      });
    }

    // body에 tb 또는 pc 클래스가 있고, swiper가 이미 존재할 때 제거
    else if (($('body').hasClass('tb') || $('body').hasClass('pc')) && productSwipers.length > 0) {
      $.each(productSwipers, function (index, swiper) {
        // swiper 완전 제거
        swiper.destroy(true, true);
      });

      // 배열 초기화
      productSwipers = [];
    }
  }

  /*
    태블릿/PC에서는 is-show 붙은 섹션만 보이게 처리
    모바일에서는 swiper 구조를 유지하기 위해 style만 제거
  */
  function initProductTab() {
    var $sections = $('.product-etc, .product-otc, .product-quasi, .product-health');
    var $activeSection;

    // 모바일이면 탭 필터 기능 적용 안 함
    if ($('body').hasClass('mo')) {
      // 이전에 hide()로 들어간 display:none 제거
      $sections.removeAttr('style');
      return;
    }

    // 현재 is-show 붙은 섹션 찾기
    $activeSection = $sections.filter('.is-show');

    // 모든 섹션 숨기기
    $sections.hide();

    // is-show가 있으면 그 섹션만 보이기
    if ($activeSection.length > 0) {
      $activeSection.show();
    } else {
      // 없으면 기본값으로 전문의약품 보이기
      $sections.removeClass('is-show');
      $('.product-etc').addClass('is-show').show();
    }
  }

  $(function () {
    /*
      탭 버튼 클릭 시
      해당 카테고리 섹션만 보이게 처리
    */
    $('.product-tab button').on('click', function () {
      var target;
      var $sections;

      // 모바일에서는 탭 클릭 기능 막기
      if ($('body').hasClass('mo')) {
        return;
      }

      // 클릭한 버튼의 data-target 값 가져오기
      // 예: etc, otc, quasi, health
      target = $(this).attr('data-target');

      // 전체 섹션 선택
      $sections = $('.product-etc, .product-otc, .product-quasi, .product-health');

      // 탭 active 상태 변경
      $('.product-tab button').removeClass('is-active');
      $(this).addClass('is-active');

      // 전체 섹션 숨기고 is-show 제거
      $sections.removeClass('is-show').hide();

      // 클릭한 탭에 맞는 섹션만 표시
      $('.product-' + target).addClass('is-show').show();
    });
  });

  // 최초 실행
  changeImg();
  initSwiper();
  initProductTab();
  $(window).on('resize', function () {
    changeImg();
    initSwiper();
    initProductTab();
  });
});