module.exports = function () {
    // Страница "Материалы" / Секция "Нерудные материалы" //
const btnMaterialsNmOpen = document.querySelectorAll('.btn__link-materials-NM'),
      NmPopup = document.querySelectorAll('.materials-NM__popup-window'),
      NmWrap = document.querySelector('.materials-NM__popup'),
      NmClose = document.querySelectorAll('.materials-NM__popup-close');
      

      for(let i = 0; i < btnMaterialsNmOpen.length; i++){
        btnMaterialsNmOpen[i].addEventListener('click', function(e){
            e.preventDefault();
            NmWrap.classList.add('materials-NM__popup-active');
            NmPopup[i].classList.add('materials-NM__popup-window--active');
        });
      } 


      for(let i = 0; i < NmClose.length; i++){
        NmClose[i].addEventListener('click', function(e){
            e.preventDefault();
            NmWrap.classList.remove('materials-NM__popup-active');
            NmPopup[i].classList.remove('materials-NM__popup-window--active');
        })

        NmWrap.addEventListener('click', function(e){
            if (e.target == NmWrap) {
              NmWrap.classList.remove('materials-NM__popup-active');
              NmPopup[i].classList.remove('materials-NM__popup-window--active');
            }
        });
      } 
};