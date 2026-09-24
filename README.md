# libearis.github.io

Personal portfolio, built with **Vue 3 + Vite** and deployed to GitHub Pages via GitHub Actions.

Live: https://libearis.github.io

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Editing content

Project cards are driven by [`src/data/projects.js`](src/data/projects.js). Set `pages: true`
on a project once its repo has GitHub Pages enabled to turn on the "Live demo" option.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site and publishes `dist/` to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
