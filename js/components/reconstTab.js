module.exports = function () {
    const reconsTub = document.querySelectorAll('.reconstruction-stages__label'),
        tabItem = document.querySelectorAll('.reconstruction-stages__tabs-content'),
        tabTopLink = document.querySelectorAll('.dropdown-tab-link');
    /*Переключение по табам */
    for (let i = 0; i < reconsTub.length; i++) {
        reconsTub[i].addEventListener('click', function () {
            for (let num = 0; num < reconsTub.length; num++) {
                reconsTub[num].classList.remove('reconstruction-stages__label--active');
                tabItem[num].classList.remove('reconstruction-stages__tabs-content--active');
            }
            reconsTub[i].classList.add('reconstruction-stages__label--active');
            tabItem[i].classList.add('reconstruction-stages__tabs-content--active');
        });
    }


    /*Переключение по ссылкам в верхнем меню*/
    for (let j = 0; j < tabTopLink.length; j++) {
        tabTopLink[j].addEventListener('click', function () {
            for (let num = 0; num < reconsTub.length; num++) {
                reconsTub[num].classList.remove('reconstruction-stages__label--active');
                tabItem[num].classList.remove('reconstruction-stages__tabs-content--active');
            }
            reconsTub[j].classList.add('reconstruction-stages__label--active');
            tabItem[j].classList.add('reconstruction-stages__tabs-content--active');
        })
    }
}