const brandsMoreBtn = document.getElementById('brandsMoreBtn');
const brandsMoreBtnImg = document.getElementById('brandsMoreBtnImg');
const brandsMoreBtnTxt = document.getElementById('brandsMoreBtnTxt');
const brandsSwiperContainer = document.getElementById('brandsSwiperContainer');

brandsMoreBtn.addEventListener('click', function() {
  brandsSwiperContainer.classList.toggle('brands__swiper-container--expanded');
  brandsMoreBtn.classList.toggle('brands__more-btn--active');
  brandsMoreBtnImg.classList.toggle('more-btn__img--flip');
  brandsMoreBtnTxt.textContent = brandsMoreBtn.classList.contains('brands__more-btn--active') ? 'Скрыть' : 'Показать все';

  const brandsSwiperSlides = document.querySelectorAll('.brands__swiper-slide');
  for (let i = 0; i < brandsSwiperSlides.length; i++) {
    brandsSwiperSlides[i].classList.toggle('brands__swiper-slide--visible');
  }
});