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

// TALL CAROUSEL
const tallCarousel = document.querySelector('.tall-carousel');
const tallCarouselItems = document.querySelectorAll('.tall-carousel-item');
let tallCarouselIndex = 0;

function showTallSlide(index) {
  if (index < 0) {
    tallCarouselIndex = tallCarouselItems.length - 1;
  } else if (index >= tallCarouselItems.length) {
    tallCarouselIndex = 0;
  } else {
    tallCarouselIndex = index;
  }

  const translateValue = -tallCarouselIndex * 100 + 'vh';
  tallCarousel.style.transform = `translateY(${translateValue})`;
}

function nextTallSlide() {
  showTallSlide(tallCarouselIndex + 1);
}

function prevTallSlide() {
  showTallSlide(tallCarouselIndex - 1);
}

// Attach event listeners to the buttons
const prevAboutButton = document.querySelector('.carousel-button.prev.about');
const nextAboutButton = document.querySelector('.carousel-button.next.about');
const prevTallButton = document.querySelector('.carousel-button.prev.tall');
const nextTallButton = document.querySelector('.carousel-button.next.tall');

prevAboutButton.addEventListener('click', prevAboutSlide);
nextAboutButton.addEventListener('click', nextAboutSlide);
prevTallButton.addEventListener('click', prevTallSlide);
nextTallButton.addEventListener('click', nextTallSlide);
