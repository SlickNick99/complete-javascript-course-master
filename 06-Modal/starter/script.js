'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
console.log(showModal);

const toggleModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  console.log(
    showModal[i].addEventListener('click', function () {
      console.log('butto nclicked');
      modal.classList.remove('hidden');

      overlay.classList.remove('hidden');
    })
  );
}

closeModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);
// overlay.addEventListener('click', function () {
//   overlay.classList.add('hidden');
// });

// closeModal.addEventListener('click', function () {
//   modal.classList.toggle('hidden');
//   overlay.classList.toggle('hidden');
// });

// overlay.addEventListener('click', function () {
//   overlay.classList.add('hidden');
// });
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      toggleModal();
    }
  }
});
