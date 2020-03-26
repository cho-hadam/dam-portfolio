const burger = document.querySelector('.burger');
const navLists = document.querySelector('.nav-lists');
const switchBtn = document.querySelector('.nav-lists i');
const body = document.querySelector('body');

function loadMode() {
    const mode = localStorage.getItem('mode');

    if(mode == null) {
        localStorage.setItem('mode', 'night');
    } else {
        if(mode == 'day') {
            day();
        } else {
            night()
        }
    }
}

function changeMode() {
    const mode = localStorage.getItem('mode');

    if(mode == 'night') {
        localStorage.setItem('mode', 'day');
        day();
    } else {
        localStorage.setItem('mode', 'night');
        night();
    }
}

function day() {
    body.classList.add('day');
    switchBtn.classList.remove('icon-moon-inv');
    switchBtn.classList.add('icon-moon');
}

function night() {
    body.classList.remove('day');
    switchBtn.classList.remove('icon-moon');
    switchBtn.classList.add('icon-moon-inv');
}

function init() {
    loadMode();

    burger.addEventListener("click", () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })

    switchBtn.addEventListener("click", changeMode);
}

init();