'use strict';

import togglePopUp from './modules/togglePopUp.js';
import burgerMenu from './modules/burgerMenu.js';
import addArrow from './modules/addArrow.js';
import autoSlider from './modules/autoSlider.js';
import sliderСarousel from './modules/sliderСarousel.js';
import sliderPhoto from './modules/sliderPhoto.js';
import calc from './modules/calc.js';
import sendForm from './modules/sendForm.js';
import maskPhone from './modules/maskPhone.js';

//выпадающее меню и модальные окна
togglePopUp();
//бургер-меню
burgerMenu();
//стрелка справа
addArrow();
//авто слайдер
autoSlider();
//слайдер карусель
sliderСarousel();
//слайдер фото
sliderPhoto();
//калькулятор
calc();
//работа с формами
sendForm();
//валидация формы
maskPhone('input[type=tel]');