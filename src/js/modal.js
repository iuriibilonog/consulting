import axios from 'axios';

const url = process.env.API;

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-bigModal-open]').forEach(item => {
      item.addEventListener('click', toggleModal);
    }),
    closeModalBtn: document.querySelector('[data-bigModal-close]'),
    closeModalBody: document.querySelector('.backdrop'),
    modal: document.querySelector('[data-bigModal]'),
    form: document.querySelector('[data-bigForm]'),
    modalBox: document.querySelector('.bigModal'),
    modalTitle: document.querySelector('[data-bigModal-title]'),
    sendMessage: document.querySelector('.send-message'),
    name: document.querySelector('[data-bigName]'),
    phone: document.querySelector('[data-bigNumber]'),
    email: document.querySelector('[data-bigEmail]'),
    checkbox: document.querySelector('[data-bigCheckbox]'),
  };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (
      e.target === document.querySelector('.backdrop') ||
      e.target === document.querySelector('.messageAfterSendContacts-button')
    ) {
      toggleModal();
    }
  });
  function toggleModal() {
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.sendMessage.innerHTML = '';
      refs.name.value = '';
      refs.phone.value = '';
      refs.email.value = '';
      refs.checkbox.checked = false;
      document.body.style.overflowY = 'scroll';
    }

    if (refs.modal.classList.contains('is-hidden')) {
      document.body.style.overflowY = 'hidden';
    }
    refs.modal.classList.toggle('is-hidden');

    setTimeout(() => {
      if (refs.form.classList.contains('visually-hidden')) {
        refs.form.classList.remove('visually-hidden');
        refs.closeModalBtn.classList.remove('visually-hidden');
        refs.modalTitle.classList.remove('visually-hidden');
        refs.modalBox.classList.remove('messageAfterSendContacts');
      }
    }, 1000);
  }
})();

(() => {
  const data = {};

  const refs = {
    name: document.querySelector('[data-bigName]'),
    phone: document.querySelector('[data-bigNumber]'),
    email: document.querySelector('[data-bigEmail]'),
    checkbox: document.querySelector('[data-bigCheckbox]'),
    form: document.querySelector('[data-bigForm]'),
    modalBox: document.querySelector('.bigModal'),
    modalTitle: document.querySelector('[data-bigModal-title]'),
    closeModalBtn: document.querySelector('[data-bigModal-close]'),
    sendMessage: document.querySelector('.send-message'),
  };
  refs.name.addEventListener('change', handleOnChange);
  refs.phone.addEventListener('change', handleOnChange);
  refs.email.addEventListener('change', handleOnChange);
  refs.form.addEventListener('submit', handleOnSubmit);

  function handleOnChange(e) {
    switch (e.target.name) {
      case 'name':
        data.name = e.target.value;
        break;
      case 'phone':
        data.phone = e.target.value;
        break;
      case 'email':
        data.email = e.target.value;
        break;

      default:
        break;
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/api/contacts`, data);
      if (response.status >= 200 && response.status < 300) {
        refs.name.value = '';
        refs.phone.value = '';
        refs.email.value = '';
        refs.checkbox.checked = false;
        refs.form.classList.add('visually-hidden');
        refs.closeModalBtn.classList.add('visually-hidden');
        refs.modalTitle.classList.add('visually-hidden');
        refs.modalBox.classList.add('messageAfterSendContacts');
        refs.sendMessage.insertAdjacentHTML(
          'beforeend',
          // '<h3 class="contacts-send-successful">Ваши данные отправлены. Мы свяжемся с Вами в ближайшее время!</h3>',
          '<div class="messageAfterSendContacts-wrapper"><h3 class="messageAfterSendContacts-title">СПАСИБО ЗА ВАШУ ЗАЯВКУ</h3><p class="messageAfterSendContacts-text">Представитель нашей компании свяжется с Вами в ближайшее время</p><button class="messageAfterSendContacts-button">Вернуться на главную</button></div > ',
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  }
})();
