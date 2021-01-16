'use strict';

const sliderСarousel = () => {
    const servicesSlider = document.querySelector('.services-slider');
    const slides = servicesSlider.querySelectorAll('.slide');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    let clientWidth = document.documentElement.clientWidth;

    let slidesToShow = 0;
    let position = 0;
    let widthSlide = 100 / slidesToShow;

    const addStyle = () => {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .glo-slider__item {
                flex: 0 0 ${widthSlide}%;
                width: 100%;
            }
            `;
        document.head.appendChild(style);
    };
    addStyle();

    const changeWidth = (clientWidth) => {
        if(clientWidth >= 1108){
            slidesToShow = 5;
            widthSlide = 100 / slidesToShow;
            addStyle();
        } else if(clientWidth < 1108 && clientWidth >= 760){
            slidesToShow = 4;
            widthSlide = 100 / slidesToShow;
            addStyle();
        } else if(clientWidth < 760 && clientWidth >= 678){
            slidesToShow = 3;
            widthSlide = 100 / slidesToShow;
            addStyle();
        } else if(clientWidth < 678 && clientWidth >= 500){
            slidesToShow = 2;
            widthSlide = 100 / slidesToShow;
            addStyle();
        } else if(clientWidth < 500){
            slidesToShow = 1;
            widthSlide = 100 / slidesToShow;
            addStyle();
        }
    };
    changeWidth(clientWidth);

    window.addEventListener('resize', () => {
        let clientWidth = document.documentElement.clientWidth;
        changeWidth(clientWidth);
    });

    const addGloClass = () => {
        for(const item of slides){
            item.classList.add('glo-slider__item');
        }
    };
    addGloClass();  
    
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