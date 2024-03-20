let nav = document.querySelector("nav");
let sections = document.querySelectorAll("section");
let hamburger = document.querySelector("#hamburger-menu");
let news = document.querySelector("#actual-news").children;
let newsArr = Array.from(news);

hamburger.addEventListener("click", function toggleSideBar() {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

sections.forEach(section => {
    section.addEventListener("click", function toggleSideBar() {
        if (nav.classList.contains("active")) {
            nav.classList.toggle("active");
            hamburger.classList.toggle("active");
        }
    });
});

function openNews(page) {
    newsArr.forEach((item) => {
        item.classList.remove("active");
    });
    newsArr[page].classList.toggle("active");
};




