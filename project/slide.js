const img = document.querySelector('.images');
const left = document.querySelector('.icon-left-open');
const right = document.querySelector('.icon-right-open');

let count = 0;

function moveLeft() {
    if(count < 2) {
        count++;
        img.style.cssText = `transform: translateX(-${count*35}vh);`;
    }
}

function moveRight() {
    if(count > 0) {
        count--;
        img.style.cssText = `transform: translateX(-${count*35}vh);`;
    }
}

function init() {
    left.addEventListener('click', moveRight);
    right.addEventListener('click', moveLeft);
}

init();