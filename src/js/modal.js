import axios from 'axios';

const url = process.env.API;

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

(() => {
  formElem.onsubmit = async e => {
    e.preventDefault();

    let response = await axios.post(`${url}/api/contact`, {
      method: 'POST',
      body: new FormData(formElem),
    });

    let result = await response.json();

    alert(result.message);
  };
})();
