const sliderImages = document.querySelector(".images-carousel-slider-images");
const slides = sliderImages.querySelectorAll("img");
let activeSlide = 0;

function updateSlider() {
  const imagesCount = getCurrentImagesCount();
  const offset = -(activeSlide * (100 / imagesCount));
  sliderImages.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  const imagesCount = getCurrentImagesCount();
  activeSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - imagesCount;
  updateSlider();
}

function nextSlide() {
  const imagesCount = getCurrentImagesCount();
  activeSlide = (activeSlide + 1) % (slides.length - imagesCount + 1);
  updateSlider();
}

function getCurrentImagesCount() {
  if (window.innerWidth < 640) {
    return 1;
  } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    return 2;
  } else {
    return 3;
  }
}

window.addEventListener("resize", updateSlider);
updateSlider(); // Initial call to adjust based on screen size
