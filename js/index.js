document.querySelector("#hamburger-menu").addEventListener("click", toggleSideBar);
let nav = document.querySelector("nav");
let hamburger = document.querySelector("#hamburger-menu");

function toggleSideBar() {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
}