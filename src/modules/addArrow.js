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

export default addArrow;