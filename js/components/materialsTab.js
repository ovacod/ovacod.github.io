module.exports = function () {
    const materialTab = document.querySelectorAll('.materials-SP-PL__label'),
        tabItem = document.querySelectorAll('.materials-SP-PL__tabs-content'),
        tabRightLink = document.querySelectorAll('.menu-page__mini-tab'),
        tabTopLink = document.querySelectorAll('.dropdown-tab-link');
    /*Переключение по табам */
    for (let i = 0; i < materialTab.length; i++) {
        materialTab[i].addEventListener('click', function () {
            for (let num = 0; num < materialTab.length; num++) {
                materialTab[num].classList.remove('materials-SP-PL__label--active');
                tabItem[num].classList.remove('materials-SP-PL__tabs-content--active');
                tabRightLink[num].classList.remove('menu-page__mini--active');
            }
            materialTab[i].classList.add('materials-SP-PL__label--active');
            tabItem[i].classList.add('materials-SP-PL__tabs-content--active');
            tabRightLink[i].classList.add('menu-page__mini--active');
        });
    }


    /*Переключение по ссылкам в правом меню */
    for (let l = 0; l < materialTab.length; l++) {
        tabRightLink[l].addEventListener('click', function () {
            for (let num = 0; num < materialTab.length; num++) {
                tabRightLink[num].classList.remove('menu-page__mini--active');
                materialTab[num].classList.remove('materials-SP-PL__label--active');
                tabItem[num].classList.remove('materials-SP-PL__tabs-content--active');
            }
            materialTab[l].classList.add('materials-SP-PL__label--active');
            tabItem[l].classList.add('materials-SP-PL__tabs-content--active');
            tabRightLink[l].classList.add('menu-page__mini--active');
        });
    }

    /*Переключение по ссылкам в верхнем меню*/
    for (let j = 0; j < materialTab.length; j++) {
        tabTopLink[j].addEventListener('click', function () {
            for (let num = 0; num < materialTab.length; num++) {
                tabRightLink[num].classList.remove('menu-page__mini--active');
                materialTab[num].classList.remove('materials-SP-PL__label--active');
                tabItem[num].classList.remove('materials-SP-PL__tabs-content--active');
            }
            materialTab[j].classList.add('materials-SP-PL__label--active');
            tabItem[j].classList.add('materials-SP-PL__tabs-content--active');
            tabRightLink[j].classList.add('menu-page__mini--active');
        })
    }
}