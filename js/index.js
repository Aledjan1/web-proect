const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        // Next button functionality
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel(currentIndex);
                });

                // Previous button functionality
                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                        updateCarousel(currentIndex);
                        });