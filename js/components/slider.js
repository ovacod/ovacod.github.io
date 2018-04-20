module.exports = function () {
        const arrowPrew = document.querySelector('.slider-arrow__prew'),
          arrowNext = document.querySelector('.slider-arrow__next'),
          paginatorItems = document.querySelectorAll('.slider-paginator__item'),
          sliderItems = document.querySelectorAll('.slider-reviews__item');
          sliderCount = sliderItems.length;
    var count = 0;
    
    
          arrowNext.addEventListener('click', function(){
            sliderItems[count].classList.remove('slider-reviews__item--active');
            paginatorItems[count].classList.remove('slider-paginator__item--active');  
            count += 1;
            if (count == sliderCount) {
                count = 0;
            }
            sliderItems[count].classList.add('slider-reviews__item--active');
            paginatorItems[count].classList.add('slider-paginator__item--active');
          });

          arrowPrew.addEventListener('click', function(){
            sliderItems[count].classList.remove('slider-reviews__item--active');
            paginatorItems[count].classList.remove('slider-paginator__item--active');  
            if (count == 0) {
                count = sliderCount;
            }
            count -= 1;
            sliderItems[count].classList.add('slider-reviews__item--active');
            paginatorItems[count].classList.add('slider-paginator__item--active');
          });
    };


