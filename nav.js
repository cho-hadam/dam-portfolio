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
        a.addEventListener('click', (event) => {
            dropdown.classList.remove('dropdown-active');
            if(event.target.text != "1ST GRADE") {
                alert("준비 중입니다.");
            }
        })
    })
}

init();