const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-lists');
const switchBtn = document.querySelector('.nav-lists i');

function init() {
    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })

    switchBtn.addEventListener("click", () => {
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