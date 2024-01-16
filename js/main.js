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
      nextEl: ".portfolioSwiper .next",
      prevEl: ".portfolioSwiper .prev",
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
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
