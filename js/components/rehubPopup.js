module.exports = function () {
    // Страница "Реконструкция" / Секция №6 "Частичная реконструкция" //
    const btnReconstructionOpen = document.querySelectorAll('.btn__link-reconstruction-partial'),
    recPopup = document.querySelectorAll('.reconstruction-partial__popup-window'),
    recWrap = document.querySelector('.reconstruction-partial__popup'),
    recClose = document.querySelectorAll('.reconstruction-partial__popup-close');
    

    for(let i = 0; i < btnReconstructionOpen.length; i++){
      btnReconstructionOpen[i].addEventListener('click', function(e){
          e.preventDefault();
          recWrap.classList.add('reconstruction-partial__popup-active');
          recPopup[i].classList.add('reconstruction-partial__popup-window--active');
      });
    } 


    for(let i = 0; i < recClose.length; i++){
      recClose[i].addEventListener('click', function(e){
          e.preventDefault();
          recWrap.classList.remove('reconstruction-partial__popup-active');
          recPopup[i].classList.remove('reconstruction-partial__popup-window--active');
      })

      recWrap.addEventListener('click', function(e){
          if (e.target == recWrap) {
            recWrap.classList.remove('reconstruction-partial__popup-active');
            recPopup[i].classList.remove('reconstruction-partial__popup-window--active');
          }
      });
    }
};