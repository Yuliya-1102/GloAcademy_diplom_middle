const burgerMenu = () => {
    const hiddenSmall = document.querySelector('.hidden-small');
    const menuButton = document.querySelector('.menu-button');
    const headerMain = document.querySelector('.header-main');
    const topMenu = document.querySelector('.top-menu');
    const popupMenu = document.querySelector('.popup-menu');
    
    window.addEventListener('resize', () => {
        let clientWidth = document.documentElement.clientWidth;
        if(clientWidth > 768){
            hiddenSmall.style.display = 'block';
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
        if(target.closest('.menu-button')){
            popupMenu.style.display = 'block';
        } else if(target.closest('.close-menu-btn') || target.closest('.scroll')){
            popupMenu.style.display = 'none';
        }
    });

};

export default burgerMenu;