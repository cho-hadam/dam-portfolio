const burger = document.querySelector('.burger');
const navLists = document.querySelector('.nav-lists');
const switchBtn = document.querySelector('.nav-lists i');
const body = document.querySelector('body');

if(localStorage.getItem('mode') == null) {
    localStorage.setItem('mode', 'night');
} else {
    if(localStorage.getItem('mode') == 'day') {
        body.classList.add('day');
        switchBtn.classList.remove('icon-moon-inv');
        switchBtn.classList.add('icon-moon');
    } else {
        body.classList.remove('day');
        switchBtn.classList.remove('icon-moon');
        switchBtn.classList.add('icon-moon-inv');
    }
}

function changeMode() {
    const mode = localStorage.getItem('mode');

    if(mode == 'night') {
        body.classList.add('day');
        localStorage.setItem('mode', 'day');
        switchBtn.classList.remove('icon-moon-inv');
        switchBtn.classList.add('icon-moon');
    } else {
        body.classList.remove('day');
        localStorage.setItem('mode', 'night');
        switchBtn.classList.remove('icon-moon');
        switchBtn.classList.add('icon-moon-inv');
    }
}

function init() {
    burger.addEventListener("click", () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })

    switchBtn.addEventListener("click", changeMode);
}

init();