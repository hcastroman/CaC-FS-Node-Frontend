function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const slideWidth = carousel.querySelector('.slide').clientWidth + 10; // 10px es el margen derecho
    carousel.scrollBy({
        left: direction * slideWidth,
        behavior: 'smooth'
    });
}