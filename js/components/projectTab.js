module.exports = function () {
    const projectTab = document.querySelectorAll('.project-stages__label'),
        tabItem = document.querySelectorAll('.project-stages__tabs-content'),
        tabTopLink = document.querySelectorAll('.dropdown-tab-link');
    /*Переключение по табам */
    for (let i = 0; i < projectTab.length; i++) {
        projectTab[i].addEventListener('click', function () {
            for (let num = 0; num < projectTab.length; num++) {
                projectTab[num].classList.remove('project-stages__label--active');
                tabItem[num].classList.remove('project-stages__tabs-content--active');
            }
            projectTab[i].classList.add('project-stages__label--active');
            tabItem[i].classList.add('project-stages__tabs-content--active');
        });
    }


    /*Переключение по ссылкам в верхнем меню*/
    for (let j = 0; j < tabTopLink.length; j++) {
        tabTopLink[j].addEventListener('click', function () {
            for (let num = 0; num < projectTab.length; num++) {
                projectTab[num].classList.remove('project-stages__label--active');
                tabItem[num].classList.remove('project-stages__tabs-content--active');
            }
            projectTab[j].classList.add('project-stages__label--active');
            tabItem[j].classList.add('project-stages__tabs-content--active');
        })
    }
}