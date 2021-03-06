window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // выпадающее меню и модальные окна
    const togglePopUp = () => {
        const body = document.querySelector('body');
        const clubsList = document.querySelector('.clubs-list');
        const clubsListUl = clubsList.querySelector('ul');
        const freeVisitForm = document.getElementById('free_visit_form'); 
        const callbackForm = document.getElementById('callback_form');
        const gift = document.getElementById('gift'); 
        const fixedGift = document.querySelector('.fixed-gift');
        const head = document.querySelector('.head');
        clubsListUl.style.display = 'none';


        const openMenu = (elem) => {
            elem.style.display = 'block';
        };
        const closeMenu = (elem) => {
            elem.style.display = 'none';
        };
        
        head.addEventListener('click', (event) => {
            const target = event.target;
            console.log(target);
            if(target.matches('p') && clubsListUl.style.display === 'none'){
                clubsListUl.style.display = 'block';
            } else if(!target.closest('ul') || target.matches('a')){
                clubsListUl.style.display = 'none';
            }
        });

        body.addEventListener('click', (event) => {
            const target = event.target;
            if(target.classList.contains('open-popup')){
                openMenu(freeVisitForm);
            } else if(target.closest('.callback-btn')){
                openMenu(callbackForm);
            } else if(target.classList.contains('overlay') || 
                target.classList.contains('close_icon') || 
                target.classList.contains('close-btn')){
                    closeMenu(freeVisitForm);
                    closeMenu(callbackForm);
                    closeMenu(gift);
            } else if(target.closest('.fixed-gift')){
                openMenu(gift);
                closeMenu(fixedGift);
            }
        });
    };
    togglePopUp();

    //бургер-меню
    const burgerMenu = () => {
        const hiddenSmall = document.querySelector('.hidden-small');
        const menuButton = document.querySelector('.menu-button');
        const headerMain = document.querySelector('.header-main');
        const topMenu = document.querySelector('.top-menu');
        const popupMenu = document.querySelector('.popup-menu');
        // let data = topMenu.getBoundingClientRect();
        
        window.addEventListener('resize', () => {
            let clientWidth = document.documentElement.clientWidth;
            if(clientWidth > 768){
                hiddenSmall.style.display = 'flex';
                menuButton.style.display = 'none';
            } else{
                hiddenSmall.style.display = 'none';
                menuButton.style.display = 'block';
            }         
        });

        window.addEventListener('scroll', () => {
            let clientWidth = document.documentElement.clientWidth;
            let pageYOffset = window.pageYOffset;
            if(pageYOffset > 187 && clientWidth <= 768){
                topMenu.style.position = 'fixed';
            } else{
                topMenu.style.position = 'static';
            }           
        });

        headerMain.addEventListener('click', (event) => {
            const target = event.target;
            if(target.matches('.menu-button img')){
                popupMenu.style.display = 'block';
            } else if(target.matches('.close-menu-btn img') || target.matches('.scroll a')){
                popupMenu.style.display = 'none';
            }
        });

    };
    burgerMenu();

    //стрелка справа
    const addArrow = () => {
        const headerMain = document.querySelector('.header-main');
        const totop = document.getElementById('totop');
        totop.style.display = 'none';
        
        window.addEventListener('scroll', () => {
            let headerMainHeight = headerMain.offsetHeight;
            let pageYOffset = window.pageYOffset;
            if(pageYOffset >= headerMainHeight){
                totop.style.display = 'block'; 
            } else{
                totop.style.display = 'none'; 
            }
        });
    };
    addArrow();


});