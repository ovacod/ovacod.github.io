module.exports = function () {
    const indexTab = document.querySelectorAll('.who-label'),
        tabItem = document.querySelectorAll('.who-tabs__content'),
        tabRightLink = document.querySelectorAll('.menu-page__mini'),
        tabTopLink = document.querySelectorAll('.dropdown-link__mini-link');
    /*Переключение по табам */
    for (let i = 0; i < indexTab.length; i++) {
        indexTab[i].addEventListener('click', function () {
            for (let num = 0; num < indexTab.length; num++) {
                indexTab[num].classList.remove('who-label--active');
                tabItem[num].classList.remove('who-tabs__content--active');
                tabRightLink[num].classList.remove('menu-page__mini--active');
            }
            indexTab[i].classList.add('who-label--active');
            tabItem[i].classList.add('who-tabs__content--active');
            tabRightLink[i].classList.add('menu-page__mini--active');
        });
    }


    /*Переключение по ссылкам в правом меню */
    for (let l = 0; l < tabRightLink.length; l++) {
        tabRightLink[l].addEventListener('click', function () {
            for (let num = 0; num < tabRightLink.length; num++) {
                tabRightLink[num].classList.remove('menu-page__mini--active');
                indexTab[num].classList.remove('who-label--active');
                tabItem[num].classList.remove('who-tabs__content--active');
            }
            indexTab[l].classList.add('who-label--active');
            tabItem[l].classList.add('who-tabs__content--active');
            tabRightLink[l].classList.add('menu-page__mini--active');
        });
    }

    /*Переключение по ссылкам в верхнем меню*/
    for (let j = 0; j < tabTopLink.length; j++) {
        tabTopLink[j].addEventListener('click', function () {
            for (let num = 0; num < tabRightLink.length; num++) {
                tabRightLink[num].classList.remove('menu-page__mini--active');
                indexTab[num].classList.remove('who-label--active');
                tabItem[num].classList.remove('who-tabs__content--active');
            }
            indexTab[j].classList.add('who-label--active');
            tabItem[j].classList.add('who-tabs__content--active');
            tabRightLink[j].classList.add('menu-page__mini--active');
        })
    }
}