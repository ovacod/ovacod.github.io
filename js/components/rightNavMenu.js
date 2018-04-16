module.exports = function () {
    // Правое меню страниц //

    var navigationItem = document.querySelectorAll(".menu-page__item");
    var navigationLink = document.querySelector(".menu-page__link");

    for (var i = 0; i < navigationLink.length; i++) {
        navigationLink[i].addEventListener('click', function () {
            navigationItem.classList.toggle('menu-page__item-active');
        })
    };
};