const sliderImages = document.querySelector(".images-carousel-slider-images");
const slides = sliderImages.querySelectorAll("a"); // We now select the <a> tags
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
    return 1; // Show 1 image at a time on small screens
  } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    return 2; // Show 2 images at a time on tablets
  } else {
    return 3; // Show 3 images at a time on large screens
  }
}

window.addEventListener("resize", updateSlider);
updateSlider(); // Initial call to adjust based on screen size
