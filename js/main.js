$(function () {
    // Swiper 초기화
  const brandSwiper = new Swiper('.brand-swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,               // 무한 반복
    speed: 300,               // 넘어가는 속도
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
});