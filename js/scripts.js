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

var teamName = document.querySelector(".team__name");
var teamPerson = document.querySelector(".team__person");
var teamItem = document.querySelectorAll(".team__item");

teamName.addEventListener('click', function (e) {
    e.preventDefault();    
    teamName.classList.toggle('team__name-active');
    teamPerson.classList.toggle('team__person-active');     
});

for (var i = 0; i < teamItem.length; i++) {
    teamName[i].addEventListener('click', function () {  
    teamName.classList.toggle('team__name-active');
    teamPerson.classList.toggle('team__person-active');   
})}



// Горизонтальный аккордеон - Меню //

var menuName = document.querySelector(".menu__name");
var menuText = document.querySelector(".menu__text");
var menuItem = document.querySelectorAll(".menu__item");


menuItem.addEventListener('click', function (e) {
    e.preventDefault();    
    menuText.classList.toggle('menu__text-active');      
    menuName.classList.toggle('menu__name-active');         
});

for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {  
    menuText.classList.toggle('menu__text-active');       
    menuName.classList.toggle('menu__name-active');        
})}