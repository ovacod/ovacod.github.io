module.exports = function () {
  var acceptLink = document.querySelectorAll('.OPD__link'),
    acceptForm = document.querySelector('.accept-form'),
    closeBtn = document.querySelector('.close-btn');

  for (let i = 0; i < acceptLink.length; i++) {
    acceptLink[i].addEventListener('click', function (e) {
      e.preventDefault();
      acceptForm.classList.add('accept-form--active');
      closeBtn.classList.add('close-btn--active');
    })
  }


  closeBtn.addEventListener('click', function () {
    acceptForm.classList.remove('accept-form--active');
    closeBtn.classList.remove('close-btn--active');
  });

  acceptForm.addEventListener('click', function (event) {
    if (event.target === acceptForm) {
      acceptForm.classList.remove('accept-form--active');
      closeBtn.classList.remove('close-btn--active');
    };
  });
};