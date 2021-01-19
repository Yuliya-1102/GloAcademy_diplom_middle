'use strict';
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так';
    const loadMessage = 'Идет отправка';
    const successMesage = 'Спасибо, мы скоро с вами свяжемся';
    const confirmMessage = 'Необходимо подтвердить согласие';
    const selectMessage = 'Необходимо выбрать клуб/клубную карту';

    const thanks = document.getElementById('thanks');
    const formContent = thanks.querySelector('p');
    const freeVisitForm = document.getElementById('free_visit_form');  
    const callbackForm = document.getElementById('callback_form');
    const priceTotal = document.getElementById('price-total');


    //создали сообщение
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 14px';
    statusMessage.style.fontFamily = '"Roboto", sans-serif';
    statusMessage.style.color = 'red';
    statusMessage.style.marginTop = '5px';
    statusMessage.style.textAlign = 'center';


    document.querySelector('body').addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;

        if(target.matches('form')){
            target.appendChild(statusMessage);
            addMessage(loadMessage);
            addWindow(target);

            const formData = new FormData(target);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then((response) => { 
                    if(response.status !== 200){
                        throw new Error('status network not 200');
                    }
                    addMessage(successMesage);
                    closeWindow(target);
                })
               .catch((error) => { //reject, передаются callback в Promise(resolve, reject)
                    addMessage(errorMessage);
                    console.error(error);
                });
            resetForm(target);
        }
    });

    const postData = (body) => {
        return fetch('./server.php', { //второй параметр у fetch
            method: 'POST', //по умолчанию GET
            headers: {
                'Content-Type': 'application/json'//свойство и значение
            },
            body: JSON.stringify(body) // данные с формы input c атрибут name в объект
        }); //возвращает промис, а выше мы его обработали
    };

    //добавляет текс в сообщение
    const addMessage = (message) => {
        statusMessage.textContent = message;
    };

    //открываем модальные окна без отправки
    const addWindow = (target) => {
        if(target.matches('#banner-form') || target.matches('#footer_form')){
            thanks.style.display = 'block';
            formContent.textContent = '';
            formContent.appendChild(statusMessage);
        }
    };

    //закрываем все модольные окна
    const closeWindow = (target) => {
        setTimeout(function(){
            statusMessage.textContent = '';
            if(target.matches('#banner-form') || target.matches('#footer_form') ||
                target.matches('#form1') || target.matches('#form2')){
                thanks.style.display = 'none';
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
            }
        }, 2000);
    };

    //форму возвращаем в первоначальный вид
    const resetForm = (target) => {
        target.reset();
        if(priceTotal){
            priceTotal.textContent = '1999';    
        }
    };

    //валидация форм
     const validForm = () => {
        document.querySelector('body').addEventListener('input', (event) => {
            const target = event.target;
            if(target.id === 'hello'){
                target.value = target.value.match(/[а-яё0-9]+/gi);
            } else if(target.type === 'text' && target.id !== 'hello'){
                target.value = target.value.match(/[а-яё]+/gi);
                target.value.length < 2 ?
                target.setCustomValidity('Имя должно состоять минимум из двух букв'):
                target.setCustomValidity('');
            } else if(target.type === 'tel'){
                target.value.length < 16 ?
                target.setCustomValidity('Номер должен состоять минимум из десяти цифр'):
                target.setCustomValidity('');
            }  
        });
    };
    validForm();

    //проверка галочки в чекбаксах
    const checkMark = (event) => {
        const target = event.target;
        if((target.matches('button') && !target.matches('.callback-btn') && !target.matches('.close-btn')) ||
         target.matches('#callback-btn-no')){
            let formCurrent = target.closest('form');
            let formCurrentInput = formCurrent.querySelectorAll('input');
                [...formCurrentInput].forEach((item) => {
                    if(item.type === 'checkbox' || item.type === 'radio'){
                        item.setAttribute("required",true);
                        if(!item.checked){
                            if(item.type === 'checkbox'){
                                addMessage(confirmMessage);
                            // statusMessage.textContent = confirmMessage;
                            } else if(item.type === 'radio'){
                                addMessage(selectMessage);
                            // statusMessage.textContent = selectMessage;
                            }
                        formCurrent.appendChild(statusMessage);
                        } 
                    }
                });
            }
    };
    document.querySelector('body').addEventListener('click', checkMark);
  
};

export default sendForm;