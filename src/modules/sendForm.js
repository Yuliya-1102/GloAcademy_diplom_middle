'use strict';
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так';
    const loadMessage = 'Идет отправка';
    const successMesage = 'Спасибо, мы скоро с вами свяжемся';
    const confirmMessage = 'Необходимо подтвердить согласие';
    const selectMessage = 'Необходимо выбрать клуб/клубную карту';

    const form = document.querySelectorAll('form');
    const arrForm = [...form];  
    const thanks = document.getElementById('thanks');
    const formContent = thanks.querySelector('p');

    //создали сообщение
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 14px';
    statusMessage.style.fontFamily = '"Roboto", sans-serif';
    statusMessage.style.color = '#ffd11a';
    statusMessage.style.marginTop = '5px';
    statusMessage.style.textAlign = 'center';


    document.querySelector('body').addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        if(target.matches('form')){
            statusMessage.textContent = loadMessage;
            target.appendChild(statusMessage);

            if(target.matches('#banner-form') || target.matches('#footer_form')){
                thanks.style.display = 'block';
                formContent.textContent = '';
                formContent.appendChild(statusMessage);
            }

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
                
                    statusMessage.textContent = successMesage;
                    clearForm();

                    setTimeout(function(){
                        statusMessage.textContent = '';
                        if(target.matches('#banner-form') || target.matches('#footer_form')){
                            thanks.style.display = 'none';
                        }
                    }, 2000);
                })
               .catch((error) => { //reject, передаются callback в Promise(resolve, reject)
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
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

     //очистка формы
     const clearForm = () => {
        arrForm.forEach(elem => {
            let elementForm = [...elem.elements].filter(item => {
                return item.tagName.toUppercase !== 'button' &&
                item.type !== 'button';
            });
            elementForm.forEach(item => {
                item.value = '';
                if(item.type === 'checkbox' || item.type === 'radio'){
                    item.checked = false;
                }
            });
        }); 
    };

     //валидация форм
     const validForm = () => {
        document.querySelector('body').addEventListener('input', (event) => {
            const target = event.target;
            if(target.type === 'text' && target.id !== 'hello'){
                target.value = target.value.match(/[а-яё]+/gi);
            } else if(target.id === 'hello'){
                target.value = target.value.match(/[а-яё0-9]+/gi);
            }

        });
    };
    validForm();

    //проверка галочки в чекбаксах
    const checkMark = (target) => {
        if((target.matches('button') && !target.matches('.callback-btn')) || target.matches('#callback-btn-no')){
            let formCurrent = target.closest('form');
            let formCurrentInput = formCurrent.querySelectorAll('input');
                [...formCurrentInput].forEach((item) => {
                    if(item.type === 'checkbox' || item.type === 'radio'){
                        item.setAttribute("required",true);
                        if(!item.checked){
                            if(item.type === 'checkbox'){
                            statusMessage.textContent = confirmMessage;
                            } else if(item.type === 'radio'){
                            statusMessage.textContent = selectMessage;
                            }
                        formCurrent.appendChild(statusMessage);
                        } 
                    }
                });
            }
    };

    document.querySelector('body').addEventListener('click', (event) => {
        const target = event.target;
        checkMark(target);
    });
   
};

export default sendForm;