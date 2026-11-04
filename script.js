// ============================================
// Palak Badyal — Portfolio v2.1 interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Typing effect in hero terminal line ----------
  const typedEl = document.getElementById('typedText');
  const phrases = [
    'whoami',
    'cat about.txt',
    'echo "building products, one commit at a time"'
  ];

  if (typedEl && reduceMotion) {
    typedEl.textContent = phrases[phrases.length - 1];
  } else if (typedEl) {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeLoop = () => {
      const current = phrases[phraseIndex];

      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1600);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(typeLoop, deleting ? 28 : 55);
    };
    typeLoop();
  }

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // ---------- Active nav link on scroll ----------
  // The old IntersectionObserver (threshold 0.3) never fired for tall sections,
  // so some links never highlighted. Pick the last section whose top has passed
  // 35% of the viewport instead.
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('.nav-link');
  let ticking = false;

  const updateActive = () => {
    ticking = false;
    const line = window.innerHeight * 0.35;
    let current = sections[0].id;
    sections.forEach(s => {
      if (s.getBoundingClientRect().top <= line) current = s.id;
    });
    // at the very bottom, force the last section (contact is short)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1].id;
    }
    navLinks.forEach(link => {
      const on = link.dataset.section === current;
      link.classList.toggle('active', on);
      if (on) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateActive); }
  }, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();

  // ---------- Mobile nav drawer ----------
  const navToggle = document.getElementById('navToggle');
  const sidenav = document.getElementById('sidenav');
  const backdrop = document.getElementById('navBackdrop');

  const setNav = (open) => {
    navToggle.classList.toggle('open', open);
    sidenav.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('show', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  if (navToggle && sidenav) {
    navToggle.addEventListener('click', () => setNav(!sidenav.classList.contains('open')));
    navLinks.forEach(link => link.addEventListener('click', () => setNav(false)));
    if (backdrop) backdrop.addEventListener('click', () => setNav(false));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidenav.classList.contains('open')) {
        setNav(false);
        navToggle.focus();
      }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) setNav(false); });
  }

  // ---------- Education "View more" panel ----------
  const eduToggle = document.getElementById('eduToggle');
  const eduPanel = document.getElementById('eduPanel');
  const eduLabel = document.getElementById('eduToggleLabel');

  if (eduToggle && eduPanel) {
    eduToggle.addEventListener('click', () => {
      const open = !eduPanel.classList.contains('open');
      eduPanel.classList.toggle('open', open);
      eduToggle.setAttribute('aria-expanded', String(open));
      if (eduLabel) eduLabel.textContent = open ? 'Show less' : 'View more';
    });
  }

});
