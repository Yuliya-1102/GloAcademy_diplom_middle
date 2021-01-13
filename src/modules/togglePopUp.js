const togglePopUp = () => {
    const body = document.querySelector('body');
    const clubsListUl = document.querySelector('.clubs-list ul');
    const freeVisitForm = document.getElementById('free_visit_form'); 
    const callbackForm = document.getElementById('callback_form');
    const gift = document.getElementById('gift'); 
    const fixedGift = document.querySelector('.fixed-gift');


    const openMenu = (elem) => {
        elem.style.display = 'block';
    };
    const closeMenu = (elem) => {
        elem.style.display = 'none';
    };

    body.addEventListener('click', (event) => {
        const target = event.target;
        if(target.closest('.club-select')){
            openMenu(clubsListUl);
        } else if(target.classList.contains('open-popup')){
            openMenu(freeVisitForm);
        } else if(target.closest('.callback-btn')){
            openMenu(callbackForm);
        } else if(target.classList.contains('overlay') || 
            target.classList.contains('close_icon') || 
            target.classList.contains('close-btn')){
                closeMenu(freeVisitForm);
                closeMenu(callbackForm);
                closeMenu(gift);
                if(fixedGift.style.display === 'none'){
                    fixedGift.style.display = 'block';
                }
        } else if(target.closest('.fixed-gift')){
            openMenu(gift);
            closeMenu(fixedGift);
        } else{
            closeMenu(clubsListUl);
        }
    });
};

export default togglePopUp;