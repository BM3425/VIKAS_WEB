document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.querySelector('#navbar-toggle');
  const navbarMenu = document.querySelector('.navbar__menu');
  const dropdownItems = document.querySelectorAll('.navbar__item');

  mobileMenu.addEventListener('click', function() {
    this.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
  });

  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (window.innerWidth <= 960) {
        const dropdown = this.querySelector('.navbar-dropdown');
        if (dropdown) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      }
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 960) {
      navbarMenu.classList.remove('active');
      mobileMenu.classList.remove('is-active');
      dropdownItems.forEach(item => {
        const dropdown = item.querySelector('.navbar-dropdown');
        if (dropdown) {
          dropdown.classList.remove('active');
        }
      });
    }
  });
});
