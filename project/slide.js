const img = document.querySelector('.images');
const left = document.querySelector('.icon-left-open');
const right = document.querySelector('.icon-right-open');
const imgNum = document.querySelectorAll('.images img');

let count = 0;
let max = 0;

function maxCounting() {
    imgNum.forEach(() => {
        max++;
    })
}

function moveLeft() {
    if(count < max-1) {
        count++;
        img.style.cssText = `transform: translateX(-${count*100}%);`;
    }
}

function moveRight() {
    if(count > 0) {
        count--;
        img.style.cssText = `transform: translateX(-${count*100}%);`;
    }
}

function init() {
    maxCounting();

    left.addEventListener('click', moveRight);
    right.addEventListener('click', moveLeft);
}

init();