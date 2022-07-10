(() => {
  const refs = {
    rightSideBtn: document.querySelector('[data-right-side-mobile]'),
    rightSideBox: document.querySelector('.right-side-mobile'),
    rightSideIconOpen: document.querySelector('[data-right-side-mobile-icon-open]'),
    rightSideIconClose: document.querySelector('[data-right-side-mobile-icon-close]'),
    leftSide: document.querySelector('.left-side-section'),
    rightSideMobileContent: document.querySelector('.right-side-mobile-content'),
  };

  refs.rightSideBtn.addEventListener('click', function (e) {
    refs.rightSideBox.classList.toggle('show');
    refs.rightSideIconOpen.classList.toggle('arrow-mobile-hide');
    refs.rightSideIconClose.classList.toggle('arrow-mobile-hide');
    refs.leftSide.classList.toggle('hidden');
    refs.rightSideMobileContent.classList.toggle('is-hidden');
  });
})();
