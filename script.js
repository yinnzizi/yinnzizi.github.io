let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slider img').length;

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const slider = document.querySelector('.slider');
  const translateValue = -currentIndex * 1000; // Assuming each image is 500px wide
  slider.style.transform = `translateX(${translateValue}px)`;
}
