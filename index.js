const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) { // Change this value as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});