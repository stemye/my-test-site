# my-test-site — Project Notes

Quick context for anyone (human or Claude) picking this project up.

## What this is
Stephen's free static website, built June 2026 as a hosting test environment that grew into real pages.

## Pages
- `index.html` — Apex Legends fan page ("Apex Outlands"), uses `apex.css` + `apex.js`
- `brazil.html` — Live World Cup 2026 tracker (self-contained: inline CSS/JS). Pulls live scores from the free `https://worldcup26.ir/get/games` API client-side, refreshes every 60s, computes group standings from results. Fallback option if that API dies: `https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json` (fixtures only, no live scores)
- `will.html` — Fun page for Stephen's son Will (self-contained). Interests: soccer/Brazil, Rocket League, his Maltipoo, Cap'n Crunch. **Public site: first name only, no photos/age/school/personal details**
- `style.css` + `script.js` — used only by old Brazil fan page versions; currently unused but kept in repo

## Code & deployment
- Source of truth: GitHub repo **stemye/my-test-site** (branch `main`)
- Local copy: this folder (`CoWork\my-test-site`)
- Two hosts auto-deploy via GitHub webhooks on every push (~1 min):
  - DigitalOcean App Platform (app name "sandbox"): https://squid-app-op8gj.ondigitalocean.app — free tier, 1 GiB bandwidth/mo
  - Render (static site "my-test-site"): https://my-test-site-pjpa.onrender.com — free tier, 100 GB bandwidth/mo (prefer sharing this URL)

## Update workflow
1. Edit files in this folder
2. Upload changed files via GitHub web UI: repo page → Add file → Upload files → commit to `main`
   (no local git installed; Claude does this via the Chrome extension)
3. Both hosts redeploy automatically; hard-refresh (Ctrl+Shift+R) to bypass browser cache

## Gotchas
- Browser caches aggressively — old versions may show after deploys; hard refresh or add `?v=N` to the URL
- Render/DigitalOcean dashboards and GitHub need Stephen to be signed in (Chrome)
- DO bandwidth overage bills $0.02/GiB beyond 1 GiB (Stephen has $5 signup credit)
