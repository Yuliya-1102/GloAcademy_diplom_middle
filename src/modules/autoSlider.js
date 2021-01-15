'use strict';

const autoSlider = () => {
    try{ 
    const mainSlider = document.querySelector('.main-slider');
    const slide = mainSlider.querySelectorAll('.slide');

    let currentSlide = 0;
    
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };
    startSlide(1500);

    } catch(error){
            
    }
};

export default autoSlider;