var navMobileBtnOpen = document.querySelector("#hamburger-menu__link");
var navMobileBtnClose = document.querySelector("#dropdown__close");
var navMobile = document.querySelector(".dropdown__menu");

navMobileBtnOpen.addEventListener('click', function () {
    event.preventDefault();
    navMobile.classList.add('dropdown__menu_active');
});

navMobileBtnClose.addEventListener('click', function () {
    event.preventDefault();
    navMobile.classList.remove('dropdown__menu_active');
});  

