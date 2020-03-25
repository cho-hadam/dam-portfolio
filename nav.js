const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-lists');

function init() {
    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })
}

init();