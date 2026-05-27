/* =========================================================
   ARROWHEAD TRADING — Core JS
   ========================================================= */

(function () {
  'use strict';

  /* ── THEME ──────────────────────────────────────────── */
  const THEME_KEY = 'arrowhead-theme';

  function getTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    // Update icon visibility
    document.querySelectorAll('.icon-sun').forEach(el => {
      el.style.display = theme === 'dark' ? 'block' : 'none';
    });
    document.querySelectorAll('.icon-moon').forEach(el => {
      el.style.display = theme === 'light' ? 'block' : 'none';
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Init theme before paint
  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function () {

    /* ── THEME TOGGLE ─────────────────────────────────── */
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
    applyTheme(getTheme()); // re-apply after DOM ready

    /* ── NAV SCROLL ───────────────────────────────────── */
    const nav = document.querySelector('.nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });
    }

    /* ── HAMBURGER ────────────────────────────────────── */
    const hamburger = document.querySelector('.nav-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        document.body.classList.toggle('nav-mobile-open');
      });
    }
    // Close on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-mobile-open');
      });
    });

    /* ── ACTIVE NAV LINK ──────────────────────────────── */
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href').split('/').pop();
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });

    /* ── SCROLL REVEAL ────────────────────────────────── */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(el => obs.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('in-view'));
    }

    /* ── QUARTER ACCORDION ────────────────────────────── */
    document.querySelectorAll('.quarter-header').forEach(function (header) {
      header.addEventListener('click', function () {
        const block = header.closest('.quarter-block');
        const isOpen = block.classList.contains('open');
        // Close all
        document.querySelectorAll('.quarter-block').forEach(b => b.classList.remove('open'));
        // Toggle current
        if (!isOpen) block.classList.add('open');
      });
    });

    /* ── CONTACT FORM ─────────────────────────────────── */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = contactForm.querySelector('[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Message sent';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = original;
          btn.disabled = false;
          contactForm.reset();
        }, 3500);
      });
    }

  });

})();
