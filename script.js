// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the nav link matching the section in view
const sections = document.querySelectorAll('main .section, .hero');
const navItems = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--accent-sage)' : '';
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// Hero role rotator — one orchestrated moment on load
const roles = ['silicon', 'circuits', 'firmware', 'the web'];
const rotatorEl = document.getElementById('roleRotator');
let roleIndex = 0;

if (rotatorEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    rotatorEl.style.opacity = '0';
    setTimeout(() => {
      rotatorEl.textContent = roles[roleIndex];
      rotatorEl.style.opacity = '1';
    }, 250);
  }, 2400);
  rotatorEl.style.transition = 'opacity 0.25s ease';
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
