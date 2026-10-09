/* ═══════════════════════════════════════
   NAVBAR — Økt opasitet ved scroll > 60px
   ═══════════════════════════════════════ */

(function () {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

/* ═══════════════════════════════════════
   MOBIL NAV
   ═══════════════════════════════════════ */

(function () {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-overlay .close-btn');

  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => overlay.classList.add('open'));
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
})();

/* ═══════════════════════════════════════
   SCROLL FADE-IN — .fade-in-el
   ═══════════════════════════════════════ */

(function () {
  const fadeEls = document.querySelectorAll('.fade-in-el');
  if (!fadeEls.length) return;

  if (!('IntersectionObserver' in window)) {
    fadeEls.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
})();

/* ═══════════════════════════════════════
   LAZY LOADING — Bilder
   ═══════════════════════════════════════ */

(function () {
  const lazyImages = document.querySelectorAll('.lazyload');
  if (!lazyImages.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.remove('lazyload');
        img.classList.add('lazyloaded');
        observer.unobserve(img);
      }
    });
  }, { threshold: 0.1 });

  lazyImages.forEach(img => observer.observe(img));
})();
