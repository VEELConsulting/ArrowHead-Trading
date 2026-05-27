# ArrowHead Trading — Website

A systematic gold trading portfolio website. Built for GitHub Pages deployment.

## Structure

```
arrowhead-trading/
├── index.html              ← Homepage
├── pages/
│   ├── performance.html    ← Quarterly performance tracker
│   ├── blog.html           ← Analysis & journal posts
│   └── contact.html        ← Contact & enquiries
├── css/
│   ├── style.css           ← Full brand system
│   └── performance.css     ← Page-specific overrides
└── js/
    ├── components.js       ← Shared nav + footer (injected)
    └── main.js             ← Theme toggle, scroll reveal, accordions
```

^. **Enable GitHub Pages**
   - Go to the repo → Settings → Pages
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - Save

^. **Site is live at:**
   `https://veelconsulting.github.io/ArrowHead-Trading/index.html`

## Adding a Custom Domain (when ready)

1. Purchase the domain
2. In repo Settings → Pages → Custom domain → enter the domain
3. At the DNS provider, add a CNAME record:
   - Name: `www`
   - Value: `the_USERNAME.github.io`
^. Also add A records for the apex domain pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

## Adding Quarterly Reports

Open `pages/performance.html` and duplicate a `.quarter-block` div. Update:
- Quarter title and date range
- Return percentage and win rate badges
- Analysis text in `.quarter-analysis`
- TradingView link
- Trade rows in the `<tbody>`

## Adding Blog Posts

Open `pages/blog.html` and duplicate a `.blog-card` div. Update:
- `data-cat` attribute (quarterly / setup / outlook / education)
- Badge text and date
- Title, excerpt, result badge

## Fonts

Uses Google Fonts: Playfair Display, Cormorant, Jost.
Falls back to Georgia/system fonts if offline.

## Theme

Light/dark theme persists via localStorage. System preference is respected on first visit.
