module.exports = function () {
    // Страница "Материалы" / Секция "Нерудные материалы" //

    function openPopupA(e) {
        e.preventDefault();
        $('.materials-NM__popup').toggleClass('materials-NM__popup-active');
    };

    $('.materials-NM__list .btn').on('click', openPopupA);
    $('.materials-NM__popup-close').on('click', openPopupA);
};