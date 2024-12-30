let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});