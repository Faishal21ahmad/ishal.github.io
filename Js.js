const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function initializeSlideshow(slideshowContainer) {
    const slidesContainer = slideshowContainer.querySelector(".slides-container");
    const slides = slidesContainer.querySelectorAll("img");
    const prevButton = slideshowContainer.querySelector(".prev-slide");
    const nextButton = slideshowContainer.querySelector(".next-slide");

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update the slide position
    const updateSlidePosition = () => {
        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    // Optional: Autoplay
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }, 5000); // Change slide every 5 seconds
}

// Apply slideshow to multiple elements
document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".project-images");
    slideshows.forEach(slideshow => initializeSlideshow(slideshow));
});