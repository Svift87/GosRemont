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
            let hideTabContent = function(a) {                                        // Создаем функцию которая скрывает контент
                for (let i = a; i < priceCotent.length; i++) {
                    priceCotent[i].classList.remove('hide');
                    priceCotent[i].classList.add('hide');
                }
        
                for (let i = a; i < priceTabList.length; i++) {
                    priceTabList[i].classList.remove('active');
                }
            };
        
            hideTabContent(1);                                                  // Вызываем функцию с числом один что бы при цикле начиналось все не с первого элемента а со второго
        
            let showTabContent = function(b) {                                        // Создаем функцию которая показывает контент если он скрыт
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
            });
    
            // Выбор вида ремонта  
    
            let repairsView = function() {
    
                let delRemuveInput = function () {
                    for (let i = 0; calcView.length > i; i++) {        
                        calcRadio[i].removeAttribute('checked');
                        calcView[i].classList.remove('calc__view--active');
                    } 
                };
    
                let delRemuve = function () {
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
    
                let payment = function  () {
                    calcValue.innerHTML = objInput.room * objInput.typeOfRepair * calcInput.value;
                }
    
                payment ();
    
            }
    
            repairsView();
        }
        
    }
    
    calc();

    // калькулятор в карточке услуги

    function productCalc() {
        let square = document.querySelector('#inputSquare'),
            repairs = document.querySelector('#inputRepairs'),
            object = document.querySelector('#inputObject'),
            productCalcValueJob = document.querySelector('.product_calc__value__job'),
            productCalcValueDraft = document.querySelector('.product_calc__value__draft'),
            productCalcValueFair = document.querySelector('.product_calc__value__fair');
        
        if (square != undefined) {
            let productCalcValue = function () {
                productCalcValueJob.innerHTML = Math.round(square.value * repairs.value * object.value);
                productCalcValueDraft.innerHTML = Math.round(productCalcValueJob.innerHTML * 0.3);
                productCalcValueFair.innerHTML = Math.round(productCalcValueJob.innerHTML * 0.7);
                productCalcValueJob.innerHTML += ' руб';
                productCalcValueDraft.innerHTML += ' руб';
                productCalcValueFair.innerHTML += ' руб';
            } 
    
            square.addEventListener('input', function() {
                productCalcValue ()
            })
    
            repairs.addEventListener('input', function() {
                productCalcValue ()
            })
    
            object.addEventListener('input', function() {
                productCalcValue ()
            })
        }        
    }

    productCalc();

    // Slider

    slider ('.examples__slider--item', '.examples__prev', '.examples__next');
    slider ('.workexamples__gallery', '.workexamples__prev', '.workexamples__next');
    slider ('.product_examples__slider_container', '.product_examples__prev', '.product_examples__next');
    slider ('.otherprojects__slider--items', '.otherprojects__prev', '.otherprojects__next');
    
    function slider (a, b, c) {
        
        let slideIndex = 1,
            slides = document.querySelectorAll(a),
            prev = document.querySelector(b),
            next = document.querySelector(c);
        if (slides.length > 0) {    
            let showSlides = function  (n) {

                if (n > slides.length) {
                    slideIndex = 1;
                }

                if (n < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach((item) => item.style.display = 'none');
                
                slides[slideIndex - 1].style.display = 'flex';
            }

            showSlides(slideIndex);

            let plusSlides = function (n) {
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

    // Примеры квартир

    function workExamples (a, b) {
        let workexamplesBigImage = document.querySelectorAll(a),
            workexamplesSmallImage = document.querySelectorAll(b),
            shadowBlock = document.querySelectorAll('.shadow__block');
        if (workexamplesBigImage != undefined) {            
            for (let i = 0; workexamplesSmallImage.length > i; i++) {
                for (let a = 0; workexamplesBigImage.length > a; a++) {
                    workexamplesBigImage[a].src = workexamplesSmallImage[0].src;
                    shadowBlock[0].style.display = 'none';
                    
                    workexamplesSmallImage[i].addEventListener('click', function(){
                        for (let c = 0; shadowBlock.length > c; c++) {
                            shadowBlock[c].style.display = 'block';
                        }
                        workexamplesBigImage[a].src = workexamplesSmallImage[i].src;
                        shadowBlock[i].style.display = 'none';
                    }) 
                }                  
            }
        }        
    }

    workExamples ('.workexamples__big_image', '.workexamples__small_image');
    workExamples ('.product_examples__big_image', '.workexamples__small_image');

    sliderNew ('.reviews_cols__slider--item', '.reviews__prev', '.reviews__next');

    function sliderNew (a, b, c) {
        
        let slideIndex = 1,
            slides = document.querySelectorAll(a),
            prev = document.querySelector(b),
            next = document.querySelector(c);
        if (slides.length > 0) {    
            let showSlides = function  (n) {
                if (n > slides.length) {
                    slideIndex = 1;
                }

                if (n < 1) {
                    slideIndex = slides.length;
                }               

                slides.forEach((item) => item.classList.add('hidden'));   
                slides.forEach((item) => item.classList.remove('min__block', 'right', 'left'));   

                slides[slideIndex - 1].classList.remove('hidden','min__block', 'right', 'left');
                
                if (slideIndex != slides.length) {
                    slides[slideIndex].classList.remove('hidden');
                    slides[slideIndex].classList.add('min__block', 'right');
                } else {
                    slides[0].classList.remove('hidden');
                    slides[0].classList.add('min__block', 'right');
                }                
                
                if (slides[1].classList.contains('right')) {
                    slides[slides.length - 1].classList.remove('hidden');
                    slides[slides.length - 1].classList.add('min__block', 'left');
                } else {
                    slides[slideIndex - 2].classList.remove('hidden');
                    slides[slideIndex - 2].classList.add('min__block', 'left');
                }
            }

            showSlides(slideIndex);

            let plusSlides = function (n) {
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