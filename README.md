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

## Deploy to GitHub Pages

1. **Create a new GitHub repository**
   - Go to github.com → New repository
   - Name it `arrowhead-trading` (or any name you prefer)
   - Set to **Public**

2. **Push these files**
   ```bash
   git init
   git add .
   git commit -m "Initial build"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/arrowhead-trading.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - Save

4. **Your site is live at:**
   `https://YOUR_USERNAME.github.io/arrowhead-trading/`

## Adding a Custom Domain (when ready)

1. Purchase your domain
2. In repo Settings → Pages → Custom domain → enter your domain
3. At your DNS provider, add a CNAME record:
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`
4. Also add A records for the apex domain pointing to GitHub's IPs:
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
