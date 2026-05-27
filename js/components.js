/* =========================================================
   ARROWHEAD TRADING — Shared Components
   Injects nav + footer into every page
   ========================================================= */

(function () {

  /* ── SVG ASSETS ─────────────────────────────────────── */
  const ARROW_SVG = `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="20,4 36,32 20,26 4,32" fill="currentColor" opacity="0.15"/>
      <polygon points="20,4 36,32 20,26 4,32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <line x1="20" y1="26" x2="20" y2="36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;

  const ICON_SUN = `<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
  const ICON_MOON = `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  /* ── ROOT PATH HELPER ────────────────────────────────── */
  // Works for both root (index.html) and /pages/ subpages
  function rootPath() {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    // If we're in /pages/ subfolder, go up one level
    return window.location.pathname.includes('/pages/') ? '../' : './';
  }

  /* ── NAV ─────────────────────────────────────────────── */
  function buildNav() {
    const r = rootPath();
    return `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="${r}index.html" aria-label="ArrowHead Trading home">
    <div class="nav-logo-mark" style="color:var(--mint-deep)">${ARROW_SVG}</div>
    <div>
      <div class="nav-logo-text">ArrowHead</div>
      <span class="nav-logo-sub">Trading</span>
    </div>
  </a>
  <ul class="nav-links" role="list">
    <li><a href="${r}index.html">Home</a></li>
    <li><a href="${r}pages/performance.html">Performance</a></li>
    <li><a href="${r}pages/blog.html">Analysis</a></li>
    <li><a href="${r}pages/contact.html">Contact</a></li>
  </ul>
  <div class="nav-right">
    <button class="theme-toggle" aria-label="Toggle theme" title="Toggle light/dark mode">
      ${ICON_SUN}${ICON_MOON}
    </button>
    <a class="btn nav-cta" href="https://www.youtube.com/@ArrowHeadTrading" target="_blank" rel="noopener" aria-label="YouTube channel">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8A3 3 0 0 0 2.6 20c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="${window.matchMedia('(prefers-color-scheme: dark)').matches ? '#0E0E0C' : '#FAFAF8'}"/></polygon></svg>
      YouTube
    </a>
    <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;
  }

  /* ── FOOTER ──────────────────────────────────────────── */
  function buildFooter() {
    const r = rootPath();
    const year = new Date().getFullYear();
    return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="nav-logo" href="${r}index.html" style="display:inline-flex;margin-bottom:0.5rem">
          <div class="nav-logo-mark" style="color:var(--mint-deep)">${ARROW_SVG}</div>
          <div>
            <div class="nav-logo-text">ArrowHead</div>
            <span class="nav-logo-sub">Trading</span>
          </div>
        </a>
        <p class="footer-brand-text">A systematic approach to gold markets. Documenting the process, evidencing the edge, building the record.</p>
      </div>
      <div>
        <div class="footer-col-title">Navigate</div>
        <ul class="footer-links">
          <li><a href="${r}index.html">Home</a></li>
          <li><a href="${r}pages/performance.html">Performance</a></li>
          <li><a href="${r}pages/blog.html">Analysis</a></li>
          <li><a href="${r}pages/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Connect</div>
        <ul class="footer-links">
          <li><a href="https://www.youtube.com/@ArrowHeadTrading" target="_blank" rel="noopener">YouTube</a></li>
          <li><a href="https://www.tradingview.com" target="_blank" rel="noopener">TradingView</a></li>
          <li><a href="${r}pages/contact.html">Enquiries</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Legal</div>
        <ul class="footer-links">
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-disclaimer">
      The information on this website is for educational and informational purposes only and does not constitute financial advice. Past performance is not indicative of future results. Trading leveraged products carries a significant risk of loss. ArrowHead Trading is an independent entity. All performance data is documented in good faith from live trading activity.
    </p>
    <div class="footer-bottom">
      <span class="footer-bottom-text">© ${year} ArrowHead Trading. All rights reserved.</span>
      <span class="footer-bottom-text" style="display:flex;align-items:center;gap:0.4rem">
        <svg width="10" height="10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="color:var(--mint-deep)" aria-hidden="true">
          <polygon points="20,4 36,32 20,26 4,32" fill="currentColor" opacity="0.4"/>
          <polygon points="20,4 36,32 20,26 4,32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>
        ArrowHead Trading
      </span>
    </div>
  </div>
</footer>`;
  }

  /* ── INJECT ──────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    // Nav: prepend to body
    const navEl = document.createElement('div');
    navEl.innerHTML = buildNav();
    document.body.insertBefore(navEl.firstElementChild, document.body.firstChild);

    // Footer: append to body
    const footerEl = document.createElement('div');
    footerEl.innerHTML = buildFooter();
    document.body.appendChild(footerEl.firstElementChild);
  });

})();
