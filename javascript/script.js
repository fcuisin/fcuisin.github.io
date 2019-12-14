// Navbar scrolling

function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-portfolio');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 600) {
        navbar.classList.add('navbar-portfolio-white');
      } else {
        navbar.classList.remove('navbar-portfolio-white');
      }
    });
  }
}

initUpdateNavbarOnScroll();
