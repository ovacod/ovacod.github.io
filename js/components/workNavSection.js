module.exports = function () {
    /*Плавный скрол по work меню*/
    $(".work-nav").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top
        //анимируем переход на расстояние - top за 1200 мс
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    
   
};