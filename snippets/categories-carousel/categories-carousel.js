const categoriesCarousel = document.querySelector(
  ".home-categories-carousel-inner"
);
const categoryScrollAmount = 150; // Adjust scroll amount based on the category width

// Move to the next category slide
function nextCategorySlide() {
  categoriesCarousel.scrollBy({
    left: categoryScrollAmount,
    behavior: "smooth",
  });
}

// Move to the previous category slide
function prevCategorySlide() {
  categoriesCarousel.scrollBy({
    left: -categoryScrollAmount,
    behavior: "smooth",
  });
}
