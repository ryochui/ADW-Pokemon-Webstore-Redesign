let nav = document.querySelector("nav");
let sections = document.querySelectorAll("section");
let hamburger = document.querySelector("#hamburger-menu");
// news
let news = document.querySelector("#actual-news").children;
let newsArr = Array.from(news);
// pokemon
let pokemonBG = document.querySelectorAll(".pokemon-bg");
let pokemonMINI = document.querySelectorAll(".pokemon-card");
let itemActive = 0;
//items
let items = document.querySelectorAll(".item-container")

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

function moveToSection(location) {
    document.getElementById(location).scrollIntoView({behavior: 'smooth'});
};

function openNews(page) {
    newsArr.forEach((item) => {
        item.classList.remove("active");
    });
    newsArr[page].classList.toggle("active");
};

items.forEach(item => {
    var isDisplayed = true;
    item.addEventListener("click", function () {

        if (isDisplayed) {
            item.style.setProperty('--displayContainer', '0');
            isDisplayed = false;
        } else {
            item.style.setProperty('--displayContainer', '1');
            isDisplayed = true;
        }
        item.classList.toggle("active");
        item.querySelector(".item-content").classList.toggle("active");
    });
});

//POKEMON FUNCTIONS
function showSlider(){
    var itemActiveOld = document.querySelector("#pokemon-bg-wrapper .pokemon-bg.active")
    var miniActiveOld = document.querySelector("#pokemon-mini-wrapper .pokemon-card.active");
    itemActiveOld.classList.remove("active");
    miniActiveOld.classList.remove("active");

    pokemonBG[itemActive].classList.add("active");
    pokemonMINI[itemActive].classList.add("active");
}

pokemonMINI.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
        itemActive = index;
        showSlider();
    })
});


//Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "3",
      coverflowEffect: {
        rotate: 75,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });