const burger = document.querySelector('.burger');
const navLists = document.querySelector('.nav-lists');

function init() {
    loadMode();

    burger.addEventListener("click", () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })

    switchBtn.addEventListener("click", changeMode);
}

init();