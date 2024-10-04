const bannerSlides = document.querySelectorAll(".home-banner-carousel-item");
const bannerDotsContainer = document.getElementById("carouselDots");
let activeBannerSlide = 0;
let bannerAutoSwap;

// Initialize Carousel
function initBannerCarousel() {
  // Generate dots
  for (let i = 0; i < bannerSlides.length; i++) {
    const dot = document.createElement("button");
    dot.classList.add("home-banner-dot");
    dot.addEventListener("click", () => goToBannerSlide(i));
    bannerDotsContainer.appendChild(dot);
  }

  // Set initial active dot
  updateBannerActiveDot();

  // Start automatic slide transitions every 10 seconds
  bannerAutoSwap = setInterval(nextBannerSlide, 10000);

  // Pause on mouse enter and resume on mouse leave
  const carousel = document.getElementById("bannerCarousel");
  carousel.addEventListener("mouseenter", () => clearInterval(bannerAutoSwap));
  carousel.addEventListener("mouseleave", () => {
    bannerAutoSwap = setInterval(nextBannerSlide, 10000);
  });
}

// Move to the next slide
function nextBannerSlide() {
  activeBannerSlide = (activeBannerSlide + 1) % bannerSlides.length;
  updateBannerCarousel();
}

// Move to the previous slide
function prevBannerSlide() {
  activeBannerSlide =
    (activeBannerSlide - 1 + bannerSlides.length) % bannerSlides.length;
  updateBannerCarousel();
}

// Move to a specific slide
function goToBannerSlide(index) {
  activeBannerSlide = index;
  updateBannerCarousel();
}

// Update the carousel display
function updateBannerCarousel() {
  // Hide all slides and show the active one
  bannerSlides.forEach((slide, index) => {
    slide.classList.toggle("active", index === activeBannerSlide);
  });

  // Update the active dot
  updateBannerActiveDot();
}

// Update active dot
function updateBannerActiveDot() {
  const dots = bannerDotsContainer.querySelectorAll(".home-banner-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeBannerSlide);
  });
}

// Initialize carousel when the DOM is ready
initBannerCarousel();
