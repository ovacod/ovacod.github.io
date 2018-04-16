module.exports = function () {
    // Страница "Работы" / Секция "Инженерные сети" - вертикальный аккордеон //

    var IsName = document.querySelectorAll(".IS__link");
    var IsItem = document.querySelectorAll(".IS__item");

    for (let i = 0; i < IsName.length; i++) {
        IsName[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < IsItem.length; j++) {
                if (j !== i) {
                    IsItem[j].classList.remove("IS__item-active");
                };
            };

            this.closest('.IS__item').classList.toggle("IS__item-active");
        });
    };
};