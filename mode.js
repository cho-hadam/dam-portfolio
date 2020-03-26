const modeBtn = document.querySelector('#mode-btn');
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
    modeBtn.classList.remove('icon-moon-inv');
    modeBtn.classList.add('icon-moon');
}

function night() {
    body.classList.remove('day');
    modeBtn.classList.remove('icon-moon');
    modeBtn.classList.add('icon-moon-inv');
}

function init() {
    loadMode();
    
    modeBtn.addEventListener("click", changeMode);
}

init();