module.exports = function () {
    // Формы правой прижатой панели (сверху) - вертикальный аккордеон //

    var teamName = document.querySelectorAll(".main__buttons");
    var teamItem = document.querySelectorAll(".buttons__item");

    for (let i = 0; i < teamName.length; i++) {
        teamName[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < teamItem.length; j++) {
                if (j !== i) {
                    teamItem[j].classList.remove("buttons__item-active");
                };
            };

            this.closest('.buttons__item').classList.toggle("buttons__item-active");
        });
    };
};