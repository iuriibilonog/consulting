let number = document.querySelector('.rezult'),
  numberTop = number.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
    document.getElementById('rezult-left').classList.add('appearence');
    this.removeEventListener('scroll', onScroll);
  }
});
