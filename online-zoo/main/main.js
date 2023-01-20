"use strict"

const burger = document.getElementById('burger');
const header = document.getElementById('header');

document.onclick = showBurger;
    
function showBurger(event) {
    if (!header.contains(event.target) || event.target == burger) {
        header.classList.toggle('_active');
        document.body.classList.toggle('_active')
    }
}
