// ============================================
// Palak Badyal — Portfolio v2 interactions
// ============================================

// TODO: add GitHub URL when available
const GITHUB_URL = 'https://github.com/palakbadyal69-wq';

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Typing effect in hero terminal line ----------
  const typedEl = document.getElementById('typedText');
  const phrases = [
    'whoami',
    'cat about.txt',
    'node CashFlowAI.js',
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
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
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
  }, { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' });
  sections.forEach(s => navObserver.observe(s));

  // ---------- Mobile nav toggle & backdrop ----------
  const navToggle = document.getElementById('navToggle');
  const sidenav = document.getElementById('sidenav');
  let backdrop = document.querySelector('.nav-backdrop');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function closeMobileNav() {
    if (navToggle) navToggle.classList.remove('open');
    if (sidenav) sidenav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  if (navToggle && sidenav) {
    navToggle.addEventListener('click', () => {
      const isOpen = sidenav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      backdrop.classList.toggle('open', isOpen);
    });

    backdrop.addEventListener('click', closeMobileNav);

    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // ---------- Education section expand / collapse ----------
  const eduToggleBtn = document.getElementById('eduToggleBtn');
  const eduExpandPanel = document.getElementById('eduExpandPanel');
  const eduToggleLabel = document.getElementById('eduToggleLabel');
  const eduToggleIcon = document.getElementById('eduToggleIcon');

  if (eduToggleBtn && eduExpandPanel) {
    eduToggleBtn.addEventListener('click', () => {
      const isExpanded = eduToggleBtn.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      eduToggleBtn.setAttribute('aria-expanded', String(nextState));
      eduExpandPanel.setAttribute('aria-hidden', String(!nextState));
      eduExpandPanel.classList.toggle('open', nextState);

      if (eduToggleLabel) eduToggleLabel.textContent = nextState ? 'Show less' : 'View more';
      if (eduToggleIcon) eduToggleIcon.innerHTML = nextState ? '&uarr;' : '&rarr;';
    });
  }

});