let currentImageSlide = 0;

const imageSliderContainer = document.getElementById('image-slider');
const dotsContainer = document.getElementById('dots-container');

const slides = document.querySelectorAll('.slide');
const totalImageSlides = slides.length;

// Initialize dots
function initializeDots() {
    dotsContainer.innerHTML = ''; // Clear existing dots
    for (let i = 0; i < totalImageSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active'); // Mark the first dot as active
        dot.addEventListener('click', () => goToSlide(i)); // Add click event
        dotsContainer.appendChild(dot);
    }
}

// Move the slider and update dots
function moveImageSlider() {
    const translateX = -(currentImageSlide * (100 / (window.innerWidth > 768 ? 2 : 1))); // Adjust for 2 or 1 slides
    imageSliderContainer.style.transform = `translateX(${translateX}%)`;
    updateDots();
}

// Update dots to show the active one
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageSlide);
    });
}

// Navigate to a specific slide
function goToSlide(index) {
    currentImageSlide = index;
    moveImageSlider();
}

// Initialize the slider
initializeDots();
moveImageSlider();

// Adjust slider for window resize
window.addEventListener('resize', () => {
    moveImageSlider();
});

