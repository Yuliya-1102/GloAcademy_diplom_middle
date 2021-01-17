'use strict';


const calc = () => {
    try{
        const cards = document.getElementById('cards'); 
        const time = document.querySelector('.time'); 
        const inputTime = time.querySelectorAll('input');
        const cardLetoMozaika = document.getElementById('card_leto_mozaika');
        const cardLetoSchelkovo = document.getElementById('card_leto_schelkovo');
        const priceMessage = document.querySelector('.price-message');
        const priceTotal = document.getElementById('price-total');
        // const cardsTypes = document.querySelector('.cards-types');

       
        
        
        let total = 0;
        let monthValue;

        const countSum = (event) => {
            const target = event.target;

            if(target.value){
                monthValue = target.value;
            }
        };

        cards.addEventListener('click', countSum);


        // cards.addEventListener('click', (event) => {
        //     const target = event.target;
        //     if(target.closest('.time') || target.closest('.club') || target.closest('.price-message')){
        //         countSum();
        //     }
            
        // });
    } catch(error){}
   
    

  
};



export default calc;