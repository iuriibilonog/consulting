let number = document.querySelector('.for-whom'),
  numberTop = number.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
    document.getElementById('consalting-left').classList.add('appearence');
    this.removeEventListener('scroll', onScroll);
  }
});
