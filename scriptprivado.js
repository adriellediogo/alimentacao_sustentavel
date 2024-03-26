let position = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
const container = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    position -= slideWidth;
    if (position < -(totalSlides - 1) * slideWidth) {
        position = 0;
    }
    container.style.transform = `translateX(${position}px)`;
}

function prevSlide() {
    position += slideWidth;
    if (position > 0) {
        position = -(totalSlides - 1) * slideWidth;
    }
    container.style.transform = `translateX(${position}px)`;
}

