// ABOUT CAROUSEL
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let aboutCarouselIndex = 0;

function showAboutSlide(index) {
  if (index < 0) {
    aboutCarouselIndex = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    aboutCarouselIndex = 0;
  } else {
    aboutCarouselIndex = index;
  }

  const translateValue = -aboutCarouselIndex * 100 + '%';
  carousel.style.transform = `translateX(${translateValue})`;
}

function nextAboutSlide() {
  showAboutSlide(aboutCarouselIndex + 1);
}

function prevAboutSlide() {
  showAboutSlide(aboutCarouselIndex - 1);
}

// Attach event listeners to the buttons
const prevAboutButton = document.querySelector('.carousel-button.prev.about');
const nextAboutButton = document.querySelector('.carousel-button.next.about');


prevAboutButton.addEventListener('click', prevAboutSlide);
nextAboutButton.addEventListener('click', nextAboutSlide);

