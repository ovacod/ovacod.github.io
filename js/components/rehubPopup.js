module.exports = function () {
    // Страница "Реконструкция" / Секция №6 "Частичная реконструкция" //

    function openPopupB(e) {
        e.preventDefault();
        $('.reconstruction-partial__popup').toggleClass('reconstruction-partial__popup-active');
    };

    $('.reconstruction-partial__list .btn').on('click', openPopupB);
    $('.reconstruction-partial__popup-close').on('click', openPopupB);
};