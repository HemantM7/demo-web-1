const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('.glassy-navbar');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const navLinks = document.querySelectorAll('.nav-links a');

navToggle.addEventListener('click', () => {
  const expanded = navbar.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', expanded);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', false);
  });
}); 