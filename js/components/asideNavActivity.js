module.exports = function () {
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        /*Плавный скрол по боковому меню */
        $('.menu-page__link').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.menu-page__link').each(function () {
                $(this).removeClass('menu-page__link--active');
            })
            $(this).addClass('menu-page__link--active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    //Изменение стиля менюшек по скролу
    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.menu-page__link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.menu-page__link').removeClass("menu-page__link--active");
                currLink.addClass("menu-page__link--active");
            } else {
                currLink.removeClass("menu-page__link--active");
            }
        });
    }
};