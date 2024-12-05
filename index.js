const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-con'); // Adjusted for children targeting
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let index = 0;

prevBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index = Math.min(index + 1, carouselItems.length - 1);
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
