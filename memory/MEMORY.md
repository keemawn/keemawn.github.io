# Portfolio Project Memory

## Project: keemawn.github.io

**Type:** Personal portfolio — React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion

**Deployed at:** https://keemawn.github.io (GitHub Pages, user site, base path `/`)

**Routing:** HashRouter (required for GitHub Pages static hosting)
Routes: `/` (Home), `/experience`, `/projects`, `/contact`

## Key Architecture

- All content lives in `src/data/` as typed TypeScript arrays (experience.ts, projects.ts, skills.ts)
- Theme state: Zustand persist in `src/stores/themeStore.ts`, class `dark` on `<html>`
- CSS variables for theming in `src/index.css` (`:root` and `.dark`)
- Tailwind config: `darkMode: 'class'`, custom colors: `accent-blue`, `accent-blue-light`
- For other CSS variable colors, use arbitrary values: `bg-[var(--bg-primary)]`, `text-[var(--text-secondary)]` etc.

## Design Rules

- **No rounded corners** on any card/input/button. Only profile photo is `rounded-full`.
- Sharp corners give a clean technical aesthetic
- Framer Motion: `whileInView` with `once: true`, fade+slide-up, stagger 0.08s
- Back-to-top button: appears after 400px scroll, fixed bottom-right

## File Structure (complete)

```
src/
  main.tsx, App.tsx, index.css
  components/layout/ — Navbar.tsx, BackToTop.tsx
  components/home/   — Hero.tsx, About.tsx, Skills.tsx
  components/experience/ — Timeline.tsx
  components/projects/   — ProjectGrid.tsx
  components/contact/    — ContactForm.tsx
  pages/ — Home.tsx, Experience.tsx, Projects.tsx, Contact.tsx
  stores/ — themeStore.ts
  data/   — experience.ts, projects.ts, skills.ts
public/images/ — profile.jpg, favicon.png
.github/workflows/deploy.yml — GitHub Actions → GitHub Pages
```

## Build / Deploy

- `npm run build` → `tsc && vite build` → outputs `dist/`
- GitHub Actions workflow at `.github/workflows/deploy.yml` deploys `dist/` to Pages on push to `main`
- Vite config: `base: '/'`

## Content

- **Person:** Yip Kai Men, Data Scientist, Singapore
- **Companies:** AgileAlgo (current), Apple, Bosch, Edwards Lifesciences, Asia GMP, Samsung
- **3 Projects:** JobScoped (featured), SPY Analytics, SMU BI&A Datathon
- **Contact:** yipkaimen@yahoo.com | linkedin.com/in/yipkaimen
- Contact form submission is a TODO (console.log placeholder, wired to Formspree later)
