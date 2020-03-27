const burger = document.querySelector('.burger');
const navLists = document.querySelector('.nav-lists');
const navPjt = document.querySelector('.nav-project a');
const dropdown = document.querySelector('.dropdown');
const pjtList = document.querySelectorAll('.dropdown a');

function init() {
    burger.addEventListener("click", () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    });

    navPjt.addEventListener("click", () => {
        dropdown.classList.toggle('dropdown-active');
    });

    pjtList.forEach((a) => {
        a.addEventListener('click', () => {
            dropdown.classList.remove('dropdown-active');
        })
    })
}

init();