var swiper = null;
  
function initSwiper() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (windowWidth <= 767 && swiper === null) {
    document.querySelector('.swiper-pagination').style.setProperty('--swiper-pagination-bottom', '20px');
    swiper = new Swiper(".brands__swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 1,
      slidesPerView: 1.312,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    });
  } else if (windowWidth > 767 && swiper !== null) {
    swiper.destroy();
    swiper = null;
  }
}

window.addEventListener("load", function() {
  initSwiper();
});

window.addEventListener("resize", function() {
  initSwiper();
});