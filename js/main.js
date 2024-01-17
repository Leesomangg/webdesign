$(document).ready(function () {
  var portfolioSwiper = new Swiper(".portfolioSwiper", {
    // 스와이퍼 방향
    direction: "horizontal",
    loop: true,
    //슬라이더 보여주는 갯수
    slidesPerView: 4,
    //슬라이더 사이 간격
    spaceBetween: 30,
    //navigation
    navigation: {
      nextEl: ".portfolio-slider-wrap .next",
      prevEl: ".portfolio-slider-wrap .prev",
    },
    //너비에 따른 슬라이더 설정
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1050: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // 토글 버튼 코드
  var menuToggleBtn = $(".menu-toggle-btn");
  mainMenu = $(".main-menu1");
  menuToggleBtn.click(function () {
    mainMenu.slideToggle();
  });
});
