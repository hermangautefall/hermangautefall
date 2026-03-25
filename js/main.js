/* ═══════════════════════════════════════
   NAVBAR — Transparent → Opaque on scroll
   ═══════════════════════════════════════ */

(function () {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  function updateNav() {
    const heroHeight = window.innerHeight * 0.8;
    if (window.scrollY > heroHeight) {
      nav.classList.remove('nav-transparent');
      nav.classList.add('nav-opaque');
    } else {
      nav.classList.remove('nav-opaque');
      nav.classList.add('nav-transparent');
    }
  }

  // Pages without hero get opaque nav immediately
  const hero = document.querySelector('.hero');
  if (hero) {
    nav.classList.add('nav-transparent');
    window.addEventListener('scroll', updateNav, { passive: true });
  } else {
    nav.classList.add('nav-opaque');
  }
})();

/* ═══════════════════════════════════════
   MOBILE NAV
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
   PAGE TRANSITIONS — Slide-up overlay
   ═══════════════════════════════════════ */

(function () {
  const overlay = document.querySelector('.page-overlay');
  if (!overlay) return;

  // Intercept internal navigation links
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Skip external links, anchors, and language switch on current page
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('slide-up');
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  // On page load, slide the overlay away
  window.addEventListener('load', () => {
    overlay.style.transform = 'translateY(0)';
    overlay.style.transition = 'none';
    requestAnimationFrame(() => {
      overlay.style.transition = 'transform 0.5s cubic-bezier(0.52, 0.16, 0.24, 1)';
      overlay.style.transform = 'translateY(-100%)';
    });
  });
})();

/* ═══════════════════════════════════════
   LAZY LOADING — Images
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
