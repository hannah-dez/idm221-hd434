// ABOUT CAROUSEL
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let CarouselIndex = 0;

function showSlide(index) {
  if (index < 0) {
    CarouselIndex = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    CarouselIndex = 0;
  } else {
    CarouselIndex = index;
  }

  const translateValue = -CarouselIndex * 100 + '%'; // Negate the value
  carousel.style.transform = `translateX(${translateValue})`;
}


function nextSlide() {
  showSlide(CarouselIndex - 1);
}

function prevSlide() {
  showSlide(CarouselIndex + 1);
}

// Attach event listeners to the buttons
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');


prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide); 

