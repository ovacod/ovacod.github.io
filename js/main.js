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
  
      request.done(function(msg){
        formPopup.classList.add('form-popup-active');
        formPopupName.textContent = "Отлично! Ваш запрос принят. Наш специалист свяжется с Вами в течение 10 минут!";
    });
  
      request.fail(function(jqXHR, textStatus) {
        formPopup.classList.add('form-popup-active');
        formPopupName.textContent = "К сожалению, произошла какая-то ошибка. Сообщение не отправлено.";
    })
};

const closeFormPopup = function() {
  let formPopup = document.querySelector('.form-popup');
  let closeBtn = document.querySelector('.close-btn');

  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    formPopup.classList.remove('form-popup-active');
  })
};

closeFormPopup();    










// Правое меню страниц //

var navigationItem = document.querySelectorAll(".menu-page__item");
var navigationLink = document.querySelector(".menu-page__link");

for (var i = 0; i < navigationLink.length; i++) {
    navigationLink[i].addEventListener('click', function () {
    navigationItem.classList.toggle('menu-page__item-active');   
})};










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









// Страница "Проектирование" / Секция "Проектирование реконструкции" - вертикальный аккордеон //

var ProjectRName = document.querySelectorAll(".project-R__link");
var ProjectRItem = document.querySelectorAll(".project-R__item");

for (let i = 0; i < ProjectRName.length; i++) {
    ProjectRName[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let j = 0; j < ProjectRItem.length; j++) {
            if (j !== i) {
                ProjectRItem[j].classList.remove("project-R__item-active");
            };
        };

        this.closest('.project-R__item').classList.toggle("project-R__item-active");
    });
};









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






// Страница "Реконструкцияы" / Секция "Внутренняя реконструкция" - вертикальный аккордеон //

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







// Страница "Материалы" / Секция "Нерудные материалы" //

function openPopupA(e) {
    e.preventDefault();
    $('.materials-NM__popup').toggleClass('materials-NM__popup-active');
};

$('.materials-NM__list .btn').on('click', openPopupA);
$('.materials-NM__popup-close').on('click', openPopupA);








// Страница "Реконструкция" / Секция №6 "Частичная реконструкция" //

function openPopupB(e) {
    e.preventDefault();
    $('.reconstruction-partial__popup').toggleClass('reconstruction-partial__popup-active');
};

$('.reconstruction-partial__list .btn').on('click', openPopupB);
$('.reconstruction-partial__popup-close').on('click', openPopupB);









// Карта - 1 метка //

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.720748, 29.846675],
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






