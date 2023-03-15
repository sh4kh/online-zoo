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