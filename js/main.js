/* ArrowHead Trading — Core JS v2 */
(function () {
  'use strict';
  var THEME_KEY = 'arrowhead-theme';

  function getTheme() {
    var s = localStorage.getItem(THEME_KEY);
    if (s) return s;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(THEME_KEY, t);
    document.querySelectorAll('.icon-sun').forEach(function(el){ el.style.display = t === 'dark' ? 'block' : 'none'; });
    document.querySelectorAll('.icon-moon').forEach(function(el){ el.style.display = t === 'light' ? 'block' : 'none'; });
  }
  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());

    /* Theme toggles */
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      btn.addEventListener('click', function(){
        var cur = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(cur === 'dark' ? 'light' : 'dark');
      });
    });

    /* Nav scroll */
    var nav = document.querySelector('.nav');
    if (nav) {
      window.addEventListener('scroll', function(){
        nav.classList.toggle('scrolled', window.scrollY > 30);
      }, { passive: true });
    }

    /* Hamburger + drawer */
    var hamburger = document.querySelector('.nav-hamburger');
    var drawer = document.querySelector('.nav-drawer');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', function(){
        var open = drawer.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      drawer.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){
          drawer.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    /* Active nav */
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function(a){
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    });

    /* Scroll reveal */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting){ e.target.classList.add('in-view'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      revealEls.forEach(function(el){ obs.observe(el); });
    } else {
      revealEls.forEach(function(el){ el.classList.add('in-view'); });
    }

    /* Accordion */
    document.querySelectorAll('.quarter-header').forEach(function(hdr){
      hdr.addEventListener('click', function(){
        var block = hdr.closest('.quarter-block');
        var isOpen = block.classList.contains('open');
        document.querySelectorAll('.quarter-block').forEach(function(b){ b.classList.remove('open'); });
        if (!isOpen) block.classList.add('open');
      });
      hdr.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); hdr.click(); }
      });
    });

    /* Contact form — Formspree handles real submission */
    var form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(e){
        /* If no action set, prevent and show message */
        if (!form.action || form.action.indexOf('formspree') === -1) {
          e.preventDefault();
          var btn = form.querySelector('[type="submit"]');
          var orig = btn.textContent;
          btn.textContent = 'Message sent ✓';
          btn.disabled = true;
          setTimeout(function(){ btn.textContent = orig; btn.disabled = false; form.reset(); }, 3500);
        }
      });
    }

    /* Live XAU price sim on homepage */
    var priceEl = document.getElementById('xau-price');
    var changeEl = document.getElementById('xau-change');
    if (priceEl) {
      var base = 3248.40, price = base;
      setInterval(function(){
        price += (Math.random() - 0.49) * 0.9;
        var chg = ((price - 3234.80) / 3234.80 * 100);
        priceEl.textContent = price.toFixed(2);
        if (changeEl) {
          changeEl.textContent = (chg >= 0 ? '+' : '') + chg.toFixed(2) + '%';
          changeEl.className = 'ticker-chg ' + (chg >= 0 ? 'up' : 'dn');
        }
      }, 2400);
    }
  });
})();
