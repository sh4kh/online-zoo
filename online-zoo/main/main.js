"use strict"

//Burger JS
function burgetInit() {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', showBurger);
    document.addEventListener('click', closeActiveMenu);
}

burgetInit();
    
function showBurger(event) {
    let modalTestimonialIsActive = document.querySelector('.testimonials__modal');
    
    if (!modalTestimonialIsActive) {
        document.body.classList.toggle('_dark');
    } 
    header.classList.toggle('_active');
}

function closeActiveMenu(event) {
    let modalTestimonialIsActive = document.querySelector('.testimonials__modal');
    let burger_is_active = header.classList.contains('_active');
    
    
    if (!header.contains(event.target) && burger_is_active) {
        if (!modalTestimonialIsActive) {
            document.body.classList.remove('_dark');
        } 
        header.classList.remove('_active');
    }
}



//===========================================================
//Carousel Pets

//https://learn.javascript.ru/task/shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }




let pet = [];


function initPetsSlider() {
    let petsCards = document.querySelectorAll('.pet');
    //Создаем массив объектов питомцев
    for (let i = 0; i < petsCards.length; i++) {
        pet[i] = petsCards[i].cloneNode(true);
    }
    petsCards[0].parentElement.remove();


}

let offset = 0;
let sliderWrap = document.querySelector('.pets__body');
let sliderWidth = sliderWrap.offsetWidth;

window.onresize = function() {
    console.log('resized');
    
    sliderWidth = sliderWrap.offsetWidth;

    if (document.documentElement.clientWidth < 1176) {
        visibleCardsCount = 3;
    } else {
        visibleCardsCount = 4;
    }
}


function drawPet() {
    let petCard = document.createElement('div');
    petCard.classList.add('pets__cards');
    petCard.style.left = offset * sliderWidth + 'px';
    sliderWrap.append(petCard);
    let pet2 = [];

    for (let i = 0; i < pet.length; i++) {
        pet2[i] = pet[i].cloneNode(true);
        petCard.append(pet2[i]);
    }
    shuffle(pet);
    
}


function drawPetRight() {
    offset = 1;
    drawPet();
};

function drawPetLeft() {
    offset = -1;
    drawPet();
};



function petLeft() {
    petNextButton.onclick = null;
    drawPetRight();
    setTimeout(function() {
        let petCards = document.querySelectorAll('.pets__cards');
        let offset2 = 0;
        for (let i = 0; i < petCards.length; i++) {
            petCards[i].style.left = offset2 * sliderWidth - sliderWidth + 'px';
            offset2++;
        }
        setTimeout(function() {
            petCards[0].remove();
            petNextButton.onclick = petLeft;
        }, 1000);
    })
}


function petRight() {
    petPreviousButton.onclick = null;
    drawPetLeft();
    setTimeout(function() {
        let petCards = document.querySelectorAll('.pets__cards');
        let offset2 = 2;
        for (let i = 0; i < petCards.length; i++) {
            petCards[i].style.left = offset2 * sliderWidth - sliderWidth + 'px';
            offset2--;
        }
        setTimeout(function() {
            petCards[0].remove();
            petPreviousButton.onclick = petRight;
        }, 1000);
    })
}


initPetsSlider();
drawPet();


let petNextButton = document.querySelector('.pets__arrow_right');
let petPreviousButton = document.querySelector('.pets__arrow_left');

petNextButton.onclick = petLeft;
petPreviousButton.onclick = petRight;



//Testimonials slider 

let visibleCardsCount;

function makeTestimonialSlider() {
    if (document.documentElement.clientWidth < 1176) {
        visibleCardsCount = 3;
        console.log(visibleCardsCount);
    } else {
        visibleCardsCount = 4;
        console.log(visibleCardsCount);
    }
    let bar = document.getElementById('testimonials-bar');
    let row = document.getElementById('testimonials-row');
    let rowGap = 29;

    drawRandomTestimonials(row, 10);

    //вычитаем кол-во видимых карточек на странице, надо ресайз делать
    bar.max = row.children.length - visibleCardsCount;
    bar.oninput = function() {
        let cardWidth = row.firstElementChild.offsetWidth;
        console.log(cardWidth);
        
        //умножаем на ширину карточки
         row.style.left = - (cardWidth + rowGap) * this.value  + 'px';
    }
}

makeTestimonialSlider();


// Генерируем карточки в количестве num в случайном порядке
function drawRandomTestimonials(elem, num) {
    let card = [];
    for (let i = 0; i < num; i++) {
        let a = randomInteger(0, 3);
        card.push(elem.children[a].cloneNode(true));
    }   
    elem.append(...card);
}

//Random integer number
//https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }




function makeModalTestimonials() {
    let isTestimonialsAdaptive = document.documentElement.clientWidth < 964;
    let row = document.getElementById('testimonials-row');

    if (isTestimonialsAdaptive) {
        row.addEventListener('click', showModalTestimonials);
        document.addEventListener('click', closeModalTestimonials)        
    }
}

function showModalTestimonials(event) {
    
    let testimonial = event.target.closest('.testimonials__column');

    if (!testimonial) return;

    let background = document.querySelector('.background_dark');
    let modalWindow = testimonial.cloneNode(true);
    let wrapper = document.querySelector('.wrapper');
    modalWindow.classList.add('testimonials__modal');
    modalWindow.classList.remove('testimonials__column');
    wrapper.append(modalWindow);
    document.body.classList.add('_dark');

    let closeIcon = document.createElement('div');
    closeIcon.classList.add('testimonials__close-icon');
    closeIcon.textContent = 'x';
    modalWindow.append(closeIcon);
    closeIcon.onclick = closeModalTestimonials;
    event.stopPropagation();    
}

function closeModalTestimonials(event) {
    
    let modalWindow = document.querySelector('.testimonials__modal');
    if (modalWindow && (!modalWindow.contains(event.target) || event.target === this)) {
        modalWindow.remove();
        if (!header.classList.contains('_active')) {
            document.body.classList.remove('_dark');
        }
    }
    
}

makeModalTestimonials();





