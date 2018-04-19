module.exports = function () {
    const btnFormOpen = document.querySelectorAll('.btn__page'),
          openedForm = document.querySelector('.form-wrapper');
          
    for(let i = 0; i < btnFormOpen.length; i++){
        btnFormOpen[i].addEventListener('click', function(e){
            e.preventDefault();
            openedForm.classList.add('form-wrapper--popup');
        });
    };

    openedForm.addEventListener('click', function(event){
        if(event.target === openedForm){
            openedForm.classList.remove('form-wrapper--popup');
        }
    });
};