'use strict';
const calc = () => {
    try{
        const cardOrder = document.getElementById('card_order');
        const time = document.querySelector('.time'); 
        const inputTime = time.querySelectorAll('input');
        const priceTotal = document.getElementById('price-total');
        const club = document.querySelectorAll('#card_order .club');
        const priceMessage = document.getElementById('hello');
        let price;
        let itemValue;

        const ajax = (link = 'mozaika') => {
            
            const request = new XMLHttpRequest();  
            request.open('GET', `./${link}.html`);
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const doc = new DOMParser().parseFromString(request.responseText, "text/html");  // преобразовать текст в HTML
                    const cardsTypes = doc.querySelector('.cards-types');
                    const cardsTypesInput = cardsTypes.querySelectorAll('input');
                    const cardsTypesLabel = cardsTypes.querySelectorAll('label');
                   
                    

                    [...inputTime].forEach((elem) => {
                        if(elem.checked){
                            let elemValue = elem.value;
                            [...cardsTypesInput].forEach((item) => {
                                if(item.value.length === 2){
                                    itemValue = item.value.slice(0,1);
                                    if(elemValue === itemValue){
                                        [...cardsTypesLabel].forEach((label) => {
                                            if(item.id === label.getAttribute('for')){
                                                let cost = label.childNodes[4].textContent;
                                                price = cost.slice(0, cost.length-1);
                                            }
                                        });
                                    }
                                } else if(item.value.length === 3 && !item.matches('#t4')){
                                    itemValue = item.value.slice(0,2);
                                    if(elemValue === itemValue){
                                        [...cardsTypesLabel].forEach((label) => {
                                            if(item.id === label.getAttribute('for')){
                                                let cost = label.childNodes[4].textContent;
                                                price = cost.slice(0, cost.length-1);
                                            }
                                        });
                                    }
                                }
                            });
                            
                        }
                    });
                    pricePromo();

                    

                    
                }
            });
            request.send(null);
        };
        ajax();

        cardOrder.addEventListener('change', (event) => {
            const target = event.target;
            if(target.name === 'card-type'){
                [...club].forEach(elem => {
                    if(elem.childNodes[1].checked && elem.childNodes[1].id === 'card_leto_mozaika'){
                        ajax('mozaika');
                        pricePromo();
                    } else if(elem.childNodes[1].checked && elem.childNodes[1].id !== 'card_leto_mozaika'){
                        ajax('schelkovo');
                        pricePromo();
                    }
                });
            } else if(target.matches('#card_leto_mozaika')){
                ajax('mozaika');
            } else if(target.matches('#card_leto_schelkovo')){
                ajax('schelkovo');
            } else if(target.id === 'hello'){
                pricePromo();
            }
        });

        const pricePromo = () => {
            if(priceMessage.value === 'ТЕЛО2019'){
                priceTotal.textContent = Math.floor(price - price * 0.30);
            } else{
                priceTotal.textContent = price;
            }
        };
      
    } catch(error){}
   
    

  
};



export default calc;