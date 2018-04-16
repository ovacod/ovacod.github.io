module.exports = function () {
    // Форма-2 из правой прижатой панели - Расчёт предварительной сметы //

    $('#order-form2').on('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();

        var form = $(e.target),
            data = form.serialize(),
            url = form.attr('action');

        var request = $.ajax({
            type: 'POST',
            url: url,
            data: data
        });

        let formPopup = document.querySelector('.form-popup'),
            formPopupName = document.querySelector('.form-popup__name');

        request.done(function (msg) {
            formPopup.classList.add('form-popup-active');
            formPopupName.textContent = "Отлично! Ваш запрос принят. Наш специалист свяжется с Вами в течение 10 минут!";
        });

        request.fail(function (jqXHR, textStatus) {
            formPopup.classList.add('form-popup-active');
            formPopupName.textContent = "К сожалению, произошла какая-то ошибка. Сообщение не отправлено.";
        })
    };

    const closeFormPopup = function () {
        let formPopup = document.querySelector('.form-popup');
        let closeBtn = document.querySelector('.close-btn');

        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();

            formPopup.classList.remove('form-popup-active');
        })
    };

    closeFormPopup();
};