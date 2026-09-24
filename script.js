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

// Highlight the active nav "channel" as sections scroll into view
const sections = document.querySelectorAll('main .section, .hero');
const navItems = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// One-time boot-sequence typing for the hero role line
const roleText = 'ECE Undergrad // VLSI · FPGA · Embedded · Web';
const typedEl = document.getElementById('typedRole');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedEl) {
  if (reduceMotion) {
    typedEl.textContent = roleText;
  } else {
    let i = 0;
    const type = () => {
      if (i <= roleText.length) {
        typedEl.textContent = roleText.slice(0, i);
        i++;
        setTimeout(type, 28);
      }
    };
    type();
  }
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
