"use strict"

const burger = document.getElementById('burger');
const header = document.getElementById('header');

burger.onclick = function(event) {
    header.classList.toggle('_active');
    document.body.classList.toggle('_active')
}

document.onclick = function(event) {
    if (!header.contains(event.target)) {
        header.classList.toggle('_active');
        document.body.classList.toggle('_active')
    }
}

console.log(burger);
