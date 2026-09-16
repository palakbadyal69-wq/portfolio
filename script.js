// ============================================
// Palak Badyal — Portfolio v2 interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Typing effect in hero terminal line ----------
  const typedEl = document.getElementById('typedText');
  const phrases = [
    'whoami',
    'cat about.txt',
    'echo "building things, one commit at a time"'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    if (!typedEl) return;
    const current = phrases[phraseIndex];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 28 : 55);
  }
  typeLoop();

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---------- Active nav link on scroll ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' });
  sections.forEach(s => navObserver.observe(s));

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const sidenav = document.getElementById('sidenav');

  if (navToggle && sidenav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      sidenav.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        sidenav.classList.remove('open');
      });
    });
  }

});