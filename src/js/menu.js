(() => {
  const refs = {
    burgerBtn: document.querySelector('.burger'),
    menu: document.querySelector('.menu'),
    backDrop: document.querySelector('.backDrop-menu'),
  };

  refs.burgerBtn.addEventListener('click', function (e) {
    refs.menu.classList.toggle('appearenceMenu');

    if (!refs.menu.classList.contains('appearenceMenu')) {
      document.body.style.overflowY = 'scroll';
    }

    if (refs.menu.classList.contains('appearenceMenu')) {
      document.body.style.overflowY = 'hidden';
    }
    // document.body.style.overflowY = 'hidden';
    // document.body.style.backgroundFilter = '16px';
  });
})();
