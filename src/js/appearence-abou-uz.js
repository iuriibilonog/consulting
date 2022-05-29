let number = document.querySelector('.about-uz'),
  numberTop = number.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
    document.getElementById('about-uz-left').classList.add('appearence');
    this.removeEventListener('scroll', onScroll);
  }
});
