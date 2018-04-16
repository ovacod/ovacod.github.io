module.exports = function () {
    // Триггеры правой прижатой панели (внизу) - вертикальный аккордеон //

    var teamName = document.querySelectorAll(".main__triggers");
    var teamItem = document.querySelectorAll(".triggers__item");

    for (let i = 0; i < teamName.length; i++) {
        teamName[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < teamItem.length; j++) {
                if (j !== i) {
                    teamItem[j].classList.remove("triggers__item-active");
                };
            };

            this.closest('.triggers__item').classList.toggle("triggers__item-active");
        });
    };
};