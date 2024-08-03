document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');

  menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Here you would typically send this data to a server
      // For this example, we'll just log it to the console
      console.log('Form submitted:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);

      // Clear the form
      form.reset();

      // Show a success message (you can replace this with a more sophisticated notification)
      alert('Thank you for your message. We will get back to you soon!');
  });
});
