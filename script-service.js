document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const navbarMenu = document.querySelector('.navbar__menu');

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
  });
});
