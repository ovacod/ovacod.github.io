// Полноэкранное меню - Первый экран //

var hamburgerLink = document.querySelector(".hamburger-menu__link");
var hamburgerMenu = document.querySelector(".dropdown");
var dropdownItem = document.querySelectorAll('.dropdown__item');
var bodyModalActive = document.body;


hamburgerLink.addEventListener('click', function (e) {
    e.preventDefault();
    hamburgerLink.classList.toggle('hamburger-menu__link-active');
    hamburgerMenu.classList.toggle('dropdown-active');
    bodyModalActive.classList.toggle('body-active');
});

for (var i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', function () {
    hamburgerLink.classList.toggle('hamburger-menu__link-active');
    hamburgerMenu.classList.toggle('dropdown-active');
    bodyModalActive.classList.toggle('body-active');
})}


// Вертикальный аккордеон - Команда //
var teamItem = document.querySelectorAll(".team__item");

for (let i = 0; i < teamItem.length; i++) {
    teamItem[i].addEventListener ('click', function (el) {
        el.currentTarget.classList.toggle('team__item-active');

        for (let i = 0; i < teamItem.length; i++) {
            if (teamItem[i] !== el.currentTarget && teamItem[i].className === "team__item team__item-active" ) {
                itemV[i].classList.remove('team__item-active');
            }
        }
    })
};


// Горизонтальный аккордеон - Меню //

var menuItem = document.querySelectorAll(".menu__item");

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener ('click', function (el) {
        el.currentTarget.classList.toggle('menu__item-active');

        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i] !== el.currentTarget && menuItem[i].className === "menu__item menu__item-active" ) {
                menuV[i].classList.remove('menu__item-active');
            }
        }
    })
};






// Слайдер //

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const list = document.querySelectorAll("#list");

const minRight = 0;
const maxRight = 2820;
const step = 940;
let currentRight = 0;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight += step;
    list.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    list.style.right = currentRight + "px";
  }
});
