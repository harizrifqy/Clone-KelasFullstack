const navToggle = document.querySelector('.nav-toggle');
const navbarLink = document.querySelector('.navbar-link');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navbarLink.classList.toggle('active');
});