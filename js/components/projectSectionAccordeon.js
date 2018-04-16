module.exports = function () {
    // Страница "Проектирование" / Секция "Проектирование реконструкции" - вертикальный аккордеон //

    var ProjectRName = document.querySelectorAll(".project-R__link");
    var ProjectRItem = document.querySelectorAll(".project-R__item");

    for (let i = 0; i < ProjectRName.length; i++) {
        ProjectRName[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < ProjectRItem.length; j++) {
                if (j !== i) {
                    ProjectRItem[j].classList.remove("project-R__item-active");
                };
            };

            this.closest('.project-R__item').classList.toggle("project-R__item-active");
        });
    };
};