'use strict';

const sliderPhoto = () => {
    const galleryBg = document.querySelector('.gallery-bg');
    const gallerySlider = document.querySelector('.gallery-slider');
    const slide = gallerySlider.querySelectorAll('.slide');
    let dot;
    let ul;
    let interval;
    let sliderDots;
    let currentSlide = 0;
    let prev;
    let next;
    let divArrows;

    const addDots = () => {
        ul = document.createElement('ul');
        ul.classList.add('slider-dots');
        sliderDots = document.querySelector('.slider-dots');
        slide.forEach((item, index) => {
            let li = document.createElement('li');
            li.classList.add('slide-item');
            let button = document.createElement('button');
            li.append(button);
            if(index === 0){
                li.classList.add('slick-active');
            }
            ul.append(li);
        });
        gallerySlider.append(ul);
        dot = ul.querySelectorAll('li');
    };
    addDots();

    const addArrow = () => {
        prev = document.createElement('a');
        next = document.createElement('a');
        divArrows = document.createElement('div');
        divArrows.classList.add('arrow-wrap');

        const prevSpan = document.createElement('span');
        prevSpan.id = 'arrow-prev';
        const nextSpan = document.createElement('span');
        nextSpan.id = 'arrow-next';

        prev.append(prevSpan);
        next.append(nextSpan);

        prev.classList.add('slider-arrow', 'prev');
        next.classList.add('slider-arrow', 'next');

        divArrows.append(prev);
        divArrows.append(next);

        gallerySlider.append(divArrows);
    };
    addArrow();

    const prevSlide = (elem, index, strClass) => { // удаляет класс active
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => { // добавляет класс active
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'gallery-item-active'); // перелистываем слайд, удаляя и добавляя класс с opasity;
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'gallery-item-active'); // перелистываем слайд, удаляя и добавляя класс с opasity;
        nextSlide(dot, currentSlide, 'slick-active');
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    // останавливать автоматическое переключение при наведении
    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        if(!target.matches('button, span')){
            return;
        }

        prevSlide(slide, currentSlide, 'gallery-item-active');
        prevSlide(dot, currentSlide, 'slick-active');

        if(target.matches('#arrow-prev')){
            currentSlide--;
        } else if(target.matches('#arrow-next')){
            currentSlide++;
        } else if(target.closest('.slide-item')){
            [...dot].forEach((elem, index) => {
                if(elem === target.closest('.slide-item')){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length -1; //длинна массива на 1ед больше, чем интдекс массива
        }
    
        nextSlide(slide, currentSlide, 'gallery-item-active');
        nextSlide(dot, currentSlide, 'slick-active');
    });

    gallerySlider.addEventListener('mouseover', (event) => {
        const target = event.target;
        if(target.matches('button') || target.matches('span')){
            stopSlide();
        }
    });
    gallerySlider.addEventListener('mouseout', (event) => {
        const target = event.target;
        if(target.matches('button') || target.matches('span')){
            startSlide();
        }
    });

    startSlide(1500);


};
export default sliderPhoto;