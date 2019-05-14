window.addEventListener('DOMContentLoaded', function () {
    'use strict'

    // табы

    tabRun('.price .tabs', '.price .tab__container', '.price .cotent');    
    tabRun('.key .tabs', '.key .tab__container', '.key .cotent');
    
        
    function tabRun(z, x, c) {
        let priceTabList = document.querySelectorAll(z),                    // Создаем переменную с табами
            priceTabItem = document.querySelector(x),                       // Создаем переменную с контейнером
            priceCotent = document.querySelectorAll(c);                         // Создаем переменную с контентом
        if (priceTabList.length > 0) {
            function hideTabContent(a) {                                        // Создаем функцию которая скрывает контент
                for (let i = a; i < priceCotent.length; i++) {
                    priceCotent[i].classList.remove('hide');
                    priceCotent[i].classList.add('hide');
                }
        
                for (let i = a; i < priceTabList.length; i++) {
                    priceTabList[i].classList.remove('active');
                }
            };
        
            hideTabContent(1);                                                  // Вызываем функцию с числом один что бы при цикле начиналось все не с первого элемента а со второго
        
            function showTabContent(b) {                                        // Создаем функцию которая показывает контент если он скрыт
                if (priceCotent[b].classList.contains('hide')) {
                    priceCotent[b].classList.remove('hide');
                }
        
                if (!priceCotent[b].classList.contains('hide')) {
                    priceTabList[b].classList.add('active');
                }        
            };    
            
            priceTabItem.addEventListener('click', function (event) {             //
                let target = event.target;
                if (target && target.classList.contains('tabs')) {
                    for (let i = 0; i < priceTabList.length; i++) {
                        if (target == priceTabList[i]) {
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
            });  
        }
    }
    
    // первый калькулятор

    let mainListSumm = document.querySelectorAll('.main__list--summ'),
        mainInput = document.querySelectorAll('.main__input'),
        mainListPrice = document.querySelectorAll('.main__list--price');

    
    for (let a = 0; mainInput.length > a; a++) {
        mainInput[a].addEventListener('input', function () {
            mainListSumm[a].innerHTML = +mainInput[a].value * +mainListPrice[a].innerText;             
        });        
    }

    function calc () {

        // Ползунок
            
        let calcWormInput = document.querySelector('.calc__worm__input'),
            calcNumTop = document.querySelector('.calc__num--top'),
            calcInput = document.querySelector('.calc__input'),
            calcView = document.querySelectorAll('.calc__view'),
            calcRadio = document.querySelectorAll('.calc__radio'),
            calcValue = document.querySelector('.calc__value'),
            calcTabList = document.querySelectorAll('.calc__tab--list'),
            calcRadioBtn = document.querySelectorAll('.calc__radio__btn');
        if (calcWormInput != undefined) {
            let objInput = {
                room: calcRadioBtn[0].value,
                typeOfRepair: calcRadio[0].value
            }
    
            calcNumTop.innerHTML = calcWormInput.value;
            calcNumTop.style.left = calcWormInput.value / 2 + '%';
            calcInput.value = calcWormInput.value;
    
            calcWormInput.addEventListener('input', function() {
                calcNumTop.innerHTML = calcWormInput.value;
                calcNumTop.style.left = calcWormInput.value / 2 + '%';
                calcInput.value = calcWormInput.value;    
                repairsView();
                console.log(objInput);
            });
    
            // Выбор вида ремонта  
    
            function repairsView() {
    
                function delRemuveInput() {
                    for (let i = 0; calcView.length > i; i++) {        
                        calcRadio[i].removeAttribute('checked');
                        calcView[i].classList.remove('calc__view--active');
                    } 
                };
    
                function delRemuve() {
                    for (let a = 0; calcTabList.length > a; a++) {        
                        calcRadioBtn[a].removeAttribute('checked');
                        calcTabList[a].classList.remove('active');
                    } 
                };
    
                for (let i = 0; calcTabList.length > i; i++) {
                    calcTabList[i].addEventListener('click', function() {
                        delRemuve();
    
                        calcRadioBtn[i].setAttribute('checked', '');   
    
                        if (calcRadioBtn[i].hasAttribute('checked')) {                
                            calcTabList[i].classList.add('active');
                            objInput.room = calcRadioBtn[i].value;
                        }
    
                        payment ();
                    })
                }
    
                for (let i = 0; calcView.length > i; i++) {
                    calcView[i].addEventListener('click', function() {
                        delRemuveInput();
    
                        calcRadio[i].setAttribute('checked', '');   
    
                        if (calcRadio[i].hasAttribute('checked')) {                
                            calcView[i].classList.add('calc__view--active');
                            objInput.typeOfRepair = calcRadio[i].value;
                        }                      
    
                        payment ();
                    });
                } 
    
                function payment () {
                    calcValue.innerHTML = objInput.room * objInput.typeOfRepair * calcInput.value;
                }
    
                payment ();
    
            }
    
            repairsView();
        }
        
    }
    
    calc();

    // Slider

    slider ('.examples__slider--item', '.examples__prev', '.examples__next');
    slider ('.reviews__slider--item', '.reviews__prev', '.reviews__next');
    slider ('.reviews_cols__slider--item', '.reviews_cols__prev', '.reviews_cols__next');
    
    function slider (a, b, c) {
        
        let slideIndex = 1,
            slides = document.querySelectorAll(a),
            prev = document.querySelector(b),
            next = document.querySelector(c);
            
        if (slides.length > 0) {
            showSlides(slideIndex);

            function showSlides (n) {

                if (n > slides.length) {
                    slideIndex = 1;
                }

                if (n < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach((item) => item.style.display = 'none');
                
                slides[slideIndex - 1].style.display = 'flex';
            }

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            prev.addEventListener('click', function() {
                plusSlides(-1);
            });

            
            next.addEventListener('click', function() {
                plusSlides(1);
            });
        }
        
    } 
});