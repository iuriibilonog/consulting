let number = document.querySelector('.plan'),
  numberTop = number.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
    document.getElementById('plan-left').classList.add('appearence');
    this.removeEventListener('scroll', onScroll);
  }
});
