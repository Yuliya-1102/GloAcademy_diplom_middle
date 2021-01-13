const togglePopUp = () => {
    const body = document.querySelector('body');
    const clubsList = document.querySelector('.clubs-list');
    const clubsListUl = clubsList.querySelector('ul');
    const freeVisitForm = document.getElementById('free_visit_form'); 
    const callbackForm = document.getElementById('callback_form');
    const gift = document.getElementById('gift'); 
    const fixedGift = document.querySelector('.fixed-gift');
    clubsListUl.style.display = 'none';


    const openMenu = (elem) => {
        elem.style.display = 'block';
    };
    const closeMenu = (elem) => {
        elem.style.display = 'none';
    };
    
    clubsList.addEventListener('click', () => {
        if(clubsListUl.style.display === 'none'){
            clubsListUl.style.display = 'block';
        } else{
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

export default togglePopUp;