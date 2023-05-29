'use strict';

// init variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// init functions
const OpenModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  overlay.classList.add('over-view');
  modal.classList.add('modal-view');
};
const CloseModal = function () {
  overlay.classList.remove('over-view');
  modal.classList.remove('modal-view');
  overlay.classList.add('over-hide');
  modal.classList.add('modal-hide');
  setTimeout(function () {
    overlay.classList.remove('over-hide');
    modal.classList.remove('modal-hide');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }, 200);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}
btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);
document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape' && !modal.classList.contains('hidden')) {
    CloseModal();
  }
});
