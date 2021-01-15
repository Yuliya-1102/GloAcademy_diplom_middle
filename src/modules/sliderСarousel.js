'use strict';

const sliderСarousel = () => {
    const servicesSlider = document.querySelector('.services-slider');
    const slides = servicesSlider.querySelectorAll('.slide');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    
    let slidesToShow = 5;
    let position = 0;
    let widthSlide = 100 / slidesToShow;
 
    const prevSlider = (event) => {
        event.preventDefault();
        if(position > 0) {
            --position;
            servicesSlider.style.transform = `translate(-${position * widthSlide}%)`;
        }
    };
    arrowLeft.addEventListener('click', prevSlider);

    const nextSlider = (event) => {
        event.preventDefault();
        if(position < slides.length - slidesToShow) {
            ++position;
            servicesSlider.style.transform = `translate(-${position * widthSlide}%)`;
        }
    };
    arrowRight.addEventListener('click', nextSlider);
};
export default sliderСarousel;