let number = document.querySelector('.about-uz-counter'),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML,
  end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    // document.querySelector('.section-question').classList.add('active');
    this.removeEventListener('scroll', onScroll);
    const interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start === end) {
        clearInterval(interval);
      }
    }, 50);
    // const el = document.querySelector('.section-question');
    // console.log('el', el);
  }
});
