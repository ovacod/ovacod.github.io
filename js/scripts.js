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



// OPS //
$('#fullpage').fullpage({
    menu: '#nav_list' 
});

var navigationItem = document.querySelectorAll(".navigation__item");
var navigationLink = document.querySelector(".navigation__link");

for (var i = 0; i < navigationLink.length; i++) {
    navigationLink[i].addEventListener('click', function () {
    navigationItem.classList.toggle('navigation__item_active');   
})};



// Слайдер //

$('.slider__list').slick();





// Вертикальный аккордеон - Команда //

var teamName = document.querySelectorAll(".team__name");
var teamItem = document.querySelectorAll(".team__item");

for (let i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let j = 0; j < teamItem.length; j++) {
            if (j !== i) {
                teamItem[j].classList.remove("team__item-active");
            };
        };

        this.closest('.team__item').classList.toggle("team__item-active");
    });
};




// Горизонтальный аккордеон - Меню //

var menuName = document.querySelectorAll(".menu__name");
var menuItem = document.querySelectorAll(".menu__item");

for (let i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let j = 0; j < menuItem.length; j++) {
            if (j !== i) {
                menuItem[j].classList.remove("menu__item-active");
            };
        };

        this.closest('.menu__item').classList.toggle("menu__item-active");
    });
};




// Отзывы //

function openPopup(e) {
    e.preventDefault();
    $('.reviews__popup').toggleClass('reviews__popup-active');
};

$('.reviews__list .btn').on('click', openPopup);
$('.reviews__popup-close').on('click', openPopup);




/* Слайдер 

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
*/