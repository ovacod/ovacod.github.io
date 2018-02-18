// Полноэкранное меню - Первый экран //

var hamburgerLink = document.querySelector(".hamburger-menu__link");
var hamburgerMenu = document.querySelector(".dropdown");
var dropdownItem = document.querySelectorAll('.dropdown__item');
var bodyModalActive = document.body;


hamburgerLink.addEventListener('click', function (e) {
    e.preventDefault();
    hamburgerLink.classList.toggle('hamburger-menu__link-active');
    hamburgerMenu.classList.toggle('dropdown-active');
    bodyModalActive.classList.toggle('body-active');
});

for (var i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', function () {
    hamburgerLink.classList.toggle('hamburger-menu__link-active');
    hamburgerMenu.classList.toggle('dropdown-active');
    bodyModalActive.classList.toggle('body-active');
})}






// OPS //
$('#fullpage').fullpage({
    menu: '#nav_list' 
});

var navigationItem = document.querySelectorAll(".navigation__item");
var navigationLink = document.querySelector(".navigation__link");

for (var i = 0; i < navigationLink.length; i++) {
    navigationLink[i].addEventListener('click', function () {
    navigationItem.classList.toggle('navigation__item_active');   
})};







// Слайдер //

$('.slider__list').slick();






// Вертикальный аккордеон - Команда //

var teamName = document.querySelectorAll(".team__name");
var teamItem = document.querySelectorAll(".team__item");

for (let i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let j = 0; j < teamItem.length; j++) {
            if (j !== i) {
                teamItem[j].classList.remove("team__item-active");
            };
        };

        this.closest('.team__item').classList.toggle("team__item-active");
    });
};






// Горизонтальный аккордеон - Меню //

var menuName = document.querySelectorAll(".menu__name");
var menuItem = document.querySelectorAll(".menu__item");

for (let i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let j = 0; j < menuItem.length; j++) {
            if (j !== i) {
                menuItem[j].classList.remove("menu__item-active");
            };
        };

        this.closest('.menu__item').classList.toggle("menu__item-active");
    });
};







// Отзывы //

function openPopup(e) {
    e.preventDefault();
    $('.reviews__popup').toggleClass('reviews__popup-active');
};

$('.reviews__list .btn').on('click', openPopup);
$('.reviews__popup-close').on('click', openPopup);







// Форма //
$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};






// Карта - 4 метки //

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.896228, 30.424272900000005],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Мы находимся здесь',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [50, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([60.06744320000001, 30.334433499999932], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'И здесь мы тоже есть',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });   

        myPlacemark3 = new ymaps.Placemark([59.89788999999998, 29.77571599999999], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'И здесь',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });  
        
        myPlacemark4 = new ymaps.Placemark([59.84963070000001, 30.0357573], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'И здесь',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        }); 

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2) 
        .add(myPlacemark3) 
        .add(myPlacemark4);
    
        myMap.behaviors.disable('scrollZoom');     

});