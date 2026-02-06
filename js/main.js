// EasyClaw — Main JS

(function () {
  'use strict';

  // Nav scroll effect
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  }, { passive: true });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // FAQ accordion (only one open at a time)
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function () {
      if (this.open) {
        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== this) other.removeAttribute('open');
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply fade-in to sections
  document.querySelectorAll('.pain-card, .model-card, .step-card, .price-card, .usecase-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Pricing buttons — link to Gumroad (placeholder)
  const GUMROAD_STARTER = '#';  // Replace with actual Gumroad link
  const GUMROAD_PRO = '#';      // Replace with actual Gumroad link

  const btnStarter = document.getElementById('btn-starter');
  const btnPro = document.getElementById('btn-pro');

  if (btnStarter) {
    btnStarter.addEventListener('click', (e) => {
      e.preventDefault();
      if (GUMROAD_STARTER !== '#') {
        window.open(GUMROAD_STARTER, '_blank');
      } else {
        alert('即將開放！請稍候。');
      }
    });
  }

  if (btnPro) {
    btnPro.addEventListener('click', (e) => {
      e.preventDefault();
      if (GUMROAD_PRO !== '#') {
        window.open(GUMROAD_PRO, '_blank');
      } else {
        alert('即將開放！請稍候。');
      }
    });
  }

})();
