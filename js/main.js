$(function () {
  const body = $('body');
  // Swiper 초기화
  const brandSwiper = new Swiper('.brand-swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,               // 무한 반복
    speed: 300,               // 넘어가는 속도
    autoplay: {
    delay: 3000, // 3초마다 전환 (단위: ms)
    disableOnInteraction: false, // 사용자 조작(클릭, 드래그) 후에도 자동 재생 유지
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: { // 태블릿: 4개씩 보이고 2개씩 이동
        slidesPerView: 4,
        spaceBetween: 20
      },
      1280: { // PC
        slidesPerView: 9,
        spaceBetween: 20,
        allowTouchMove: false,
        loop: false
      }
    }
  });

  let productSwiper = undefined; // 스와이프 변수를 선언만 해둡니다.

  function initSwiper() {
    const screenWidth = window.innerWidth;

    // 1. 768px 미만(모바일)이고 스와이프가 없을 때만 생성
    if (screenWidth < 768 && productSwiper === undefined) {
      productSwiper = new Swiper('.product-box-wrap.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    // 2. 768px 이상(PC)이고 스와이프가 이미 있으면 파괴
    else if (screenWidth >= 768 && productSwiper !== undefined) {
      productSwiper.destroy(); // 인라인 스타일을 모두 제거하고 파괴함
      productSwiper = undefined; // 변수 초기화
    }
  }

  let currentVideoType = '';

  function changeVideo() {
    const heroVideo = $('.main-hero-video');
    let newType = '';
    let newSrc = '';

    if (body.hasClass('mo')) {
      newType = 'mo';
      newSrc = './images/y_heroVideo_mo.mp4';
    } else {
      newType = 'desktop';
      newSrc = './images/y_heroVideo.mp4';
    }

    // 같은 상태면 변경 안 함
    if (currentVideoType === newType) return;

    currentVideoType = newType;
    heroVideo.attr('src', newSrc);

    const videoEl = heroVideo.get(0);
    videoEl.load();
    videoEl.play().catch(function(){});
  }

  // 페이지 로드 시 실행
  initSwiper();
  changeVideo();

  // 화면 크기가 변할 때마다 실행 (리사이즈 대응)
  window.addEventListener('resize', function () {
    initSwiper();
    changeVideo();
  });
  
});