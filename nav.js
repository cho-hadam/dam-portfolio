const burger = document.querySelector('.burger');
const navLists = document.querySelector('.nav-lists');
const switchBtn = document.querySelector('.nav-lists i');
const body = document.querySelector('body');

function init() {
    burger.addEventListener("click", () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })

    switchBtn.addEventListener("click", () => {
        body.classList.toggle('day');
        
        if(switchBtn.classList.value == 'icon-moon-inv') {
            switchBtn.classList.remove('icon-moon-inv');
            switchBtn.classList.add('icon-moon');
        } else {
            switchBtn.classList.remove('icon-moon');
            switchBtn.classList.add('icon-moon-inv');
        }
    })
}

init();