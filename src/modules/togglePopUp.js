const togglePopUp = () => {
    try{ 
    const body = document.querySelector('body');
    const clubsList = document.querySelector('.clubs-list');
    const clubsListUl = clubsList.querySelector('ul');
    const freeVisitForm = document.getElementById('free_visit_form'); 
    const callbackForm = document.getElementById('callback_form');
    const gift = document.getElementById('gift'); 
    const fixedGift = document.querySelector('.fixed-gift');
    const headerMain = document.querySelector('.header-main');
    const thanks = document.getElementById('thanks');

    clubsListUl.style.display = 'none';
    
    headerMain.addEventListener('click', (event) => {
        const target = event.target;
        if(target.matches('p') && clubsListUl.style.display === 'none'){
            clubsListUl.style.display = 'block';
        } else if(target.matches('ul') || target.matches('a') ||
            !target.matches('li')){
            clubsListUl.style.display = 'none';
        }
    });

    body.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target);
        if(target.classList.contains('open-popup')){
             freeVisitForm.style.display = 'block';
        } else if(target.closest('.callback-btn') && !target.closest('#callback-btn-no')){
            callbackForm.style.display = 'block';
        } else if(target.classList.contains('overlay') || 
            target.classList.contains('close_icon') || 
            target.classList.contains('close-btn')){
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
                thanks.style.display = 'none';
        }
    });
          
    fixedGift.addEventListener('click', () => {
        gift.style.display = 'block';
        fixedGift.style.display = 'none';
    });
    gift.addEventListener('click', (event) => {
        const target = event.target;

        if(target.classList.contains('overlay') || 
            target.classList.contains('close_icon') || 
            target.classList.contains('close-btn')) {
            gift.style.display = 'none';
        }
    });
    } catch(error){
            
    }
};

export default togglePopUp;