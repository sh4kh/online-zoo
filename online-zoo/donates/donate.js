"use strict"

//Burger JS

function burgetInit() {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', showBurger);
    document.addEventListener('click', closeActiveMenu);
}

burgetInit();
    
function showBurger(event) {
    document.body.classList.toggle('_active');
}

function closeActiveMenu(event) {
    let burger_is_active = document.body.classList.contains('_active');
    if (!header.contains(event.target) && burger_is_active) {
        document.body.classList.remove('_active');
    }
}


//Donate Bar

let bar = document.getElementById('donate-bar');
let inputAmount = document.getElementById('input-amount');
let selectedItem = document.querySelector('.progress__dot-active');


bar.onclick = function(event) {

    let item = event.target.closest('.progress__dot-container');

    if (!item) return;

    highlight(item);
    inputAmount.value = item.dataset.amount;
    
}

//Выделение элемента
function highlight(elem) {
    if (selectedItem) {
        selectedItem.classList.remove('progress__dot-active');
    }
    selectedItem = elem;
    selectedItem.classList.add('progress__dot-active');
}

let amountElems = Array.from(document.querySelectorAll('.progress__dot-container'));
let amountsArray = amountElems.map( (item) => item.dataset.amount);
console.log(amountsArray);


inputAmount.oninput = function() {
    
    let value = this.value;
    let index;
    if (selectedItem) {
        selectedItem.classList.remove('progress__dot-active');
    }
    if (amountsArray.includes(value)) {
        index = amountsArray.indexOf(value);
        amountElems[index].classList.add('progress__dot-active');
        selectedItem = amountElems[index];
    }
}