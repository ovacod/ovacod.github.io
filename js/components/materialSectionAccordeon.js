module.exports = function () {
    // Страница "Материалы" / Секция "Металлические конструкции" - вертикальный аккордеон //

    var materialsMKName = document.querySelectorAll(".materials-MK__link");
    var materialsMKItem = document.querySelectorAll(".materials-MK__item");

    for (let i = 0; i < materialsMKName.length; i++) {
        materialsMKName[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < materialsMKItem.length; j++) {
                if (j !== i) {
                    materialsMKItem[j].classList.remove("materials-MK__item-active");
                };
            };

            this.closest('.materials-MK__item').classList.toggle("materials-MK__item-active");
        });
    };
};