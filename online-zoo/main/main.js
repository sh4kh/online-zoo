"use strict"

//Burger JS
const burger = document.getElementById('burger');
const header = document.getElementById('header');

burger.addEventListener('click', showBurger);
    
function showBurger(event) {
    document.body.classList.toggle('_active');
    header.classList.toggle('_active');
}

document.addEventListener('click', closeActiveMenu);

function closeActiveMenu(event) {
    let burger_is_active = header.classList.contains('_active');
    if (!header.contains(event.target) && burger_is_active) {
        document.body.classList.toggle('_active');
        header.classList.toggle('_active');
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
    shuffle(pet);

}



function drawPet() {
    let step = 0;
    let offset = 0;
    let petNextButton = document.querySelector('.pet__arrow_right');
    let petPreviousButton = document.querySelector('.pet__arrow_left');

    console.log(petNextButton);
    console.log(petPreviousButton);
    
    
    let container = document.querySelector('.pets__container');
    let containerWidth = container.clientWidth;

    initPetsSlider();

    

    let petCard = document.createElement('div');
    petCard.classList.add('pets__cards');
    petCard.style.left = offset * containerWidth + 'px';
    container.prepend(petCard);

    for (let elem of pet) {
        petCard.append(elem);
    }
    petCard.append(petNextButton);
    petCard.append(petPreviousButton);
    
}


let petNextButton = document.querySelector('.pet__arrow_right');
let petPreviousButton = document.querySelector('.pet__arrow_left');


petNextButton.onclick = drawPet;
petPreviousButton.onclick = drawPet;


