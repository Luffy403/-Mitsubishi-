document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.slider__image');
  const leftBtn = document.getElementById('slide-left');
  const rightBtn = document.getElementById('slide-right');
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach(img => {
      img.classList.remove('slider__image--active');
      img.classList.add('slider__image--hidden');
    });

    images[index].classList.add('slider__image--active');
    images[index].classList.remove('slider__image--hidden');
  }

  rightBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  });

  leftBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  });

  showSlide(0);
});