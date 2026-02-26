# CLAUDE.md — Personal Portfolio: Yip Kai Men

## Project Overview

This is a personal portfolio website for **Yip Kai Men**, a Data Scientist based in Singapore. The goal is a professional, visually refined portfolio that communicates technical depth, personality, and career trajectory to recruiters and collaborators.

Claude is authorized to **delete and refactor all existing frontend files** in this codebase. The old rendition is obsolete. Build fresh.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS (utility-first, no component libraries) |
| Routing | React Router v6 |
| State | Zustand (theme store only; keep it lean) |
| Animations | Framer Motion (subtle, not overdone) |
| Icons | Lucide React |

This portfolio lives entirely in the `frontend/` directory. It is a standalone static site — do **not** wire it to the existing JobScoped backend or Supabase. No auth, no API calls.

---

## Page Architecture

The portfolio uses **React Router** with the following route structure. Not everything is on one long scrollable page — heavier sections have their own routes.

```
/               → Home (Hero + About Me + Skills) — single scroll, 3 sections
/experience     → Experience (vertical timeline)
/projects       → Projects (bento grid cards)
/contact        → Contact
```

### Navigation

- A **persistent top navbar** with links to all 4 routes.
- The navbar highlights the active route.
- On the `/` (Home) route, the navbar links smoothly scroll to the `#about` and `#skills` anchors within the page.
- A **"Back to Top" floating button** appears at the bottom-right corner on all pages once the user scrolls past 400px. It scrolls to the top of the page smoothly.
- A **light/dark mode toggle** icon sits in the top-right of the navbar.

---

## Design System

### Colour Palette

The palette must feel professional, calm, and enjoyable. No garish contrast. Use CSS variables so light/dark themes swap cleanly.

**Light Mode**
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#F8F9FC` | Page background (pastel white, not pure white) |
| `--bg-secondary` | `#EEF1F8` | Section/card backgrounds |
| `--bg-card` | `#FFFFFF` | Bento box surfaces |
| `--accent-blue` | `#3B6FD4` | Primary CTA, links, highlights |
| `--accent-blue-light` | `#6B9FE8` | Hover states, secondary accents |
| `--text-primary` | `#1A1F2E` | Headings |
| `--text-secondary` | `#4A5568` | Body, descriptions |
| `--text-muted` | `#8A93A8` | Labels, timestamps |
| `--border` | `#D8DDE8` | Card borders, dividers |

**Dark Mode**
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0F1117` | Page background (near-black, not pure black) |
| `--bg-secondary` | `#161B27` | Section backgrounds |
| `--bg-card` | `#1E2435` | Bento box surfaces |
| `--accent-blue` | `#5B8FEE` | Primary CTA, links, highlights |
| `--accent-blue-light` | `#7AABF0` | Hover states |
| `--text-primary` | `#E8ECF4` | Headings |
| `--text-secondary` | `#A0AABF` | Body, descriptions |
| `--text-muted` | `#5A6478` | Labels, timestamps |
| `--border` | `#2A3147` | Card borders, dividers |

### Typography

- Font: `Inter` (Google Fonts)
- Headings: `font-semibold` or `font-bold`, tight tracking
- Body: `font-normal`, comfortable line height (`1.7`)
- Code/tech labels: `font-mono` (for skill tags, tool names)

### Shape Language

- **No rounded-edge boxes.** Use `rounded-none` or `rounded-sm` (2px max) for all cards and containers.
- Sharp corners give the design a clean, technical aesthetic.
- Borders are thin (`1px`) and use `--border` token.
- Bento grid cells should have subtle box shadows to create depth, not borders alone.

### Animations (Framer Motion)

Keep animations purposeful and non-distracting:

- **Fade + slide up** on section entry (`initial: { opacity: 0, y: 24 }`, `animate: { opacity: 1, y: 0 }`, `duration: 0.5`). Trigger via `whileInView` with `once: true`.
- **Hover lift** on project and skill cards (`whileHover: { y: -4 }`, `duration: 0.2`).
- **Staggered children** in bento grids (`staggerChildren: 0.08`).
- **No parallax, no spinning loaders, no typewriter effects.**
- The back-to-top button fades in/out smoothly.

---

## Content & Sections

### 1. Home Page (`/`)

#### 1a. Hero Section

- Full-viewport-height section.
- **Left side:** Name (`Yip Kai Men`), title (`Data Scientist`), a 1–2 line tagline drawn from his summary (e.g. *"Building intelligent systems at the intersection of data, engineering, and product."*), and two CTA buttons: `View Projects` (routes to `/projects`) and `Get in Touch` (routes to `/contact`).
- **Right side:** Profile photo (circular crop, with a subtle `--accent-blue` ring border). If the image file is not yet present, use a placeholder with initials `KM`.
- Social links row below the tagline: LinkedIn (`www.linkedin.com/in/yipkaimen`), email (`yipkaimen@yahoo.com`). Use Lucide icons.

#### 1b. About Me Section (`#about`)

- Two-column layout: short bio paragraph on the left, a compact stat/highlight block on the right.
- Bio should be warm and first-person, summarising his engineering-to-data-science journey, current role at AgileAlgo, and interests.
- Stat block highlights (use small labeled cards):
  - 🎓 NUS Mechanical Engineering (Hons), 2025
  - 💼 Data Scientist @ AgileAlgo
  - 🗣️ English · Mandarin · Cantonese
  - 📍 Singapore

#### 1c. Skills Section (`#skills`) — **Bento Grid**

The bento grid for skills should have a **non-uniform, magazine-style layout** — cells of varying widths/heights, not a regular grid.

Skills to populate from resume:

**Languages & Tools (one cell per category, sized by importance):**
- Core Languages: `Python`, `R`, `SQL`, `MATLAB`
- AI / ML Frameworks: `CrewAI`, `LangGraph`, `Scikit-learn`, `TensorFlow`, `CNNs`
- Data & Viz: `Tableau`, `Power BI`, `Streamlit`, `Plotly Dash`, `Matplotlib`, `Seaborn`
- Graph & Networks: `Knowledge Graphs`, `GNNs`, `NetworkX`
- Web & Dev: `HTML`, `CSS`, `SOLIDWORKS`
- Cloud & DB: `AWS`, `Supabase`, `PostgreSQL`
- Spoken Languages: English, Mandarin, Cantonese (small accent cell)

Each bento cell should display the category name, an icon or emoji, and the skill tags as monospace pills. One large "hero" cell for the most important category (Python / ML), others smaller.

Certifications can be a separate narrow bento cell listing them with tick icons.

---

### 2. Experience Page (`/experience`)

**Layout: Vertical Timeline**

- A centered vertical line runs down the page.
- Each job is a card that appears alternating left/right (desktop) or all-left (mobile).
- Cards are sharp-cornered, use `--bg-card`, with a left accent border in `--accent-blue`.
- The timeline node (circle on the line) uses `--accent-blue`.

**Entries (chronological, newest first):**

| Company | Role | Period |
|---|---|---|
| AgileAlgo | Data Scientist | May 2025 – Present |
| Apple | Specialist | Aug 2024 – Feb 2025 |
| Bosch | ML/AI & Sustainability Research Engineer Intern | Jan 2024 – May 2024 |
| Edwards Lifesciences | Digitalization Intern | Jul 2023 – Dec 2023 |
| Asia GMP | Writer & Administrative Assistant | May 2023 – Jun 2023 |
| Samsung Electronics | Galaxy Specialist | May 2022 – Jun 2023 |

Each card contains: company name, role, date range, location, and 3–5 bullet points pulled from the resume. AgileAlgo and Bosch entries should be the most detailed (most technically relevant).

---

### 3. Projects Page (`/projects`) — **Bento Grid**

Three projects to feature:

#### Project 1: JobScoped
- **Tagline:** Resume Analyzer & Career Pathfinder for Singapore job seekers
- **Description:** Full-stack AI application. Users upload a resume, get matched to career paths, receive skill gap analysis, and a personalized learning roadmap.
- **Tech tags:** `React` `TypeScript` `FastAPI` `Python` `Supabase` `DeepSeek LLM` `LangGraph` `PostgreSQL`
- **Links:** GitHub link (placeholder — add `#` if not yet public)
- **Size in bento:** Large (featured card, spans 2 columns)

#### Project 2: SPY Analytics and Forecasting
- **Tagline:** Deep dive into SPY's historical performance and ML-driven future growth projections
- **Description:** Comprehensive analysis of inflation-adjusted returns, historical trend analysis, and machine learning forecasting of S&P 500 index performance.
- **Tech tags:** `Python` `Scikit-learn` `Pandas` `Matplotlib` `Machine Learning`
- **Period:** Aug 2024 – Dec 2024
- **Size in bento:** Medium

#### Project 3: SMU BI&A Club Datathon 2025
- **Tagline:** Interactive dashboards for structured data extraction and visualization
- **Description:** Delivered data pipeline and interactive dashboards for the SMU Business Intelligence & Analytics Club Datathon. Extracted structured data and built visualization layer in Plotly Dash.
- **Tech tags:** `Python` `Plotly Dash` `Data Visualization` `SQL`
- **Period:** Jan 2025 – Feb 2025
- **Size in bento:** Medium

**Bento layout suggestion:** JobScoped is a wide featured card at the top. SPY Analytics and SMU Datathon sit side-by-side below it.

Each project card includes: title, tagline, description, tech pill tags, and a row of icon-links (GitHub, live demo if applicable).

---

### 4. Contact Page (`/contact`)

- Clean, minimal layout. Not a full-page form — keep it human and approachable.
- Short intro line: *"I'm open to new opportunities, collaborations, or just a conversation."*
- **Contact methods displayed as cards:**
  - 📧 Email: `yipkaimen@yahoo.com`
  - 💼 LinkedIn: `linkedin.com/in/yipkaimen`
  - 📍 Location: Singapore
- A simple **contact form** below: Name, Email, Message fields, and a Send button. Style the form inputs with sharp borders, `--border` color, and `--accent-blue` focus ring. Form submission can be a no-op (console log) or wired to Formspree/EmailJS if desired — leave a clearly commented TODO.

---

## File Structure

This is the entire repo — there is no `frontend/` subdirectory. Rebuild with this structure at the repo root:

```
src/
├── main.tsx
├── App.tsx                   # Router setup (HashRouter), theme class on <html>
├── index.css                 # CSS variables (light/dark), base resets
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Top nav, theme toggle, active link highlight
│   │   └── BackToTop.tsx     # Floating scroll-to-top button
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── Skills.tsx        # Bento grid
│   │
│   ├── experience/
│   │   └── Timeline.tsx      # Vertical timeline + cards
│   │
│   ├── projects/
│   │   └── ProjectGrid.tsx   # Bento grid for projects
│   │
│   └── contact/
│       └── ContactForm.tsx
│
├── pages/
│   ├── Home.tsx              # Composes Hero + About + Skills
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
│
├── stores/
│   └── themeStore.ts         # Zustand: { theme, toggleTheme } + localStorage persist
│
└── data/
    ├── experience.ts         # Experience entries array
    ├── projects.ts           # Project entries array
    └── skills.ts             # Skills by category

public/
└── images/
    └── profile.jpg           # Profile photo (add manually)

index.html
vite.config.ts
tailwind.config.js
tsconfig.json
package.json
.gitignore
```

All content (experience entries, project data, skills) should live in `src/data/` as typed TypeScript arrays, not hardcoded in JSX. This makes future edits easy.

---

## Theme Implementation

- Theme state lives in `themeStore.ts` (Zustand, persisted to `localStorage`).
- On theme change, toggle the class `dark` on `document.documentElement`.
- All colours are CSS variables defined in `index.css` under `:root` (light) and `.dark` (dark).
- Tailwind should be configured with `darkMode: 'class'` in `tailwind.config.js`.
- The toggle icon in the navbar: sun icon for light mode, moon icon for dark mode (Lucide).

---

## Behaviour & UX Rules

1. **No rounded corners** on any card, input, button, or container. Use `rounded-none` throughout. Exception: profile photo is circular.
2. **Back to Top button:** Fixed position, bottom-right (`bottom-8 right-8`). Visible only after scrolling 400px. Smooth scroll to top on click. Fade in/out with Framer Motion.
3. **Navbar:** Sticky top, slight backdrop blur (`backdrop-blur-sm`) with semi-transparent background so content scrolls underneath cleanly. Height: `64px`.
4. **Active nav link** is indicated by an `--accent-blue` bottom border underline, not a background fill.
5. **Mobile responsive:** The layout must work at 375px width. Timeline goes single-column. Bento grids collapse to single column. Navbar collapses to a hamburger menu.
6. **Scroll animations** are `whileInView` with `once: true` — they only play once, not every time the element enters the viewport.
7. **No loaders or spinners.** This is a static site — instant renders only.
8. **Profile photo:** Expected at `public/images/profile.jpg`. If absent, render a fallback `<div>` with initials `KM` styled with `--accent-blue` background.

---

## Profile Photo

Kai Men will provide the photo at `public/images/profile.jpg` in the repo root. Any additional images (project screenshots, company logos, etc.) should also go in `public/images/`. The Hero component should handle the photo gracefully:

```tsx
const [imgError, setImgError] = useState(false);

{imgError ? (
  <div className="w-48 h-48 rounded-full bg-accent-blue flex items-center justify-center text-white text-4xl font-bold">
    KM
  </div>
) : (
  <img
    src="/images/profile.jpg"
    alt="Kai Men Yip"
    className="w-48 h-48 rounded-full object-cover ring-4 ring-accent-blue"
    onError={() => setImgError(true)}
  />
)}
```

---

## Competitions to Feature

Under `/experience` or as a sidebar call-out on the Projects page, include a small **Competitions & Achievements** subsection:

- 🏆 HSBC Global Private Banking Case Competition 2023 — Team of 4, asset management & market insights pitch
- 🏆 SMU BI&A Club Datathon 2025 — Delivered interactive dashboards (also in Projects)

---

## Out of Scope

- No backend, no API, no auth, no database.
- Do not reuse or import from the existing JobScoped backend or Supabase config.
- Do not add a blog section.
- Do not use any UI component library (no shadcn, no MUI, no Chakra). Tailwind + custom CSS only.
- Do not use `create-react-app`. The existing Vite setup should be reused or reinitialised.
- Do not reference or import anything from JobScoped — that is a separate, unrelated project used only as a content reference.

---

## Deployment: GitHub Pages

This repo is deployed via **GitHub Pages** at `https://keemawn.github.io`. Because this is a user site (`username.github.io`), the base path is simply `/` — no subdirectory prefix is needed.

```ts
// vite.config.ts
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```

Because GitHub Pages does not support server-side routing, React Router must use **`HashRouter`** instead of `BrowserRouter`. This means routes will look like `https://keemawn.github.io/#/experience` rather than `https://keemawn.github.io/experience` — this is expected and correct for GitHub Pages.

---

## Definition of Done

- [ ] All 4 routes render correctly in light and dark mode
- [ ] Theme persists across page refresh
- [ ] Back-to-top button appears and functions correctly
- [ ] Navbar highlights active route
- [ ] Timeline renders all 6 experience entries
- [ ] Projects bento grid renders all 3 projects
- [ ] Skills bento grid renders all categories
- [ ] Contact form renders (submission is a TODO/console.log)
- [ ] Profile photo loads or gracefully falls back to initials
- [ ] All content matches resume data exactly
- [ ] Mobile layout (375px) does not break
- [ ] No TypeScript errors on `npm run build`
