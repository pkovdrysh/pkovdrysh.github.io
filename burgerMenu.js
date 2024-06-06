const burgerMenu = document.querySelector(".burger-menu");

const offScreenMenu = document.querySelector(".header-content");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    body.classList.toggle("active");

});