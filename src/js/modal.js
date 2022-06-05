(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-bigModal-open]'),
    closeModalBtn: document.querySelector('[data-bigModal-close]'),
    closeModalBody: document.querySelector('.backdrop'),
    modal: document.querySelector('[data-bigModal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
