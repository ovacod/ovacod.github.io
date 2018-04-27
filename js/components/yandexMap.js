module.exports = function () {
    // Карта - 1 метка //

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.723996, 30.404666],
                zoom: 9,
                controls: []
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark1 = new ymaps.Placemark([59.720748, 29.846675], {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Мы находимся здесь',
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/logo/logo.png',
                // Размеры метки.
                iconImageSize: [50, 60],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });



        myMap.geoObjects
            .add(myPlacemark1);



    });
};