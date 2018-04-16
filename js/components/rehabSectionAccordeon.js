module.exports = function () {
    // Страница "Реконструкция" / Секция "Внутренняя реконструкция" - вертикальный аккордеон //

    var internalReconstructionName = document.querySelectorAll(".internal-reconstruction__link");
    var internalReconstructionItem = document.querySelectorAll(".internal-reconstruction__item");

    for (let i = 0; i < internalReconstructionName.length; i++) {
        internalReconstructionName[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < internalReconstructionItem.length; j++) {
                if (j !== i) {
                    internalReconstructionItem[j].classList.remove("internal-reconstruction__item-active");
                };
            };

            this.closest('.internal-reconstruction__item').classList.toggle("internal-reconstruction__item-active");
        });
    };
};