document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenu = document.getElementById('navbar-toggle');
  const navbarMenu = document.querySelector('.navbar__menu');

  if (mobileMenu && navbarMenu) {
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });
  } else {
    console.error('Mobile menu elements not found');
  }

  // Carousel elements
  const photoCarousel = document.querySelector('.carousel-track');
  const testimonialCarousel = document.querySelector('.testimonial-track');
  const prevPhotoBtn = document.querySelector('.carousel-control-prev');
  const nextPhotoBtn = document.querySelector('.carousel-control-next');
  const prevTestimonialBtn = document.getElementById('prevTestimonial');
  const nextTestimonialBtn = document.getElementById('nextTestimonial');

  function initCarousel(carousel, prevBtn, nextBtn, isTestimonial = false) {
    if (!carousel || !prevBtn || !nextBtn) {
      console.error('Carousel elements not found');
      return;
    }

    const slides = Array.from(carousel.children);
    let currentIndex = 0;

    function showSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showSlide(currentIndex);

    if (!isTestimonial) {
      slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
          img.style.width = '100%';
          img.style.height = '400px';
          img.style.objectFit = 'cover';
        }
      });
    }

    // Auto-scroll functionality
    let autoScrollInterval;

    function startAutoScroll() {
      autoScrollInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();
  }

  // Initialize carousels
  initCarousel(photoCarousel, prevPhotoBtn, nextPhotoBtn);
  initCarousel(testimonialCarousel, prevTestimonialBtn, nextTestimonialBtn, true);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Image zoom functionality
  const zoomableImages = document.querySelectorAll('.img-zoom');
  zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('zoom-overlay');
      const zoomedImg = img.cloneNode();
      zoomedImg.classList.add('zoomed-image');
      overlay.appendChild(zoomedImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    });
  });

  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(element => fadeObserver.observe(element));
});
