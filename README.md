# Framelight 🖼️

<div align="center">

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br/>

> A **minimal, dark-themed photo gallery** app built with React 19 — featuring live search, favourites, skeleton loading, and smooth animations.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-success?style=for-the-badge)](https://framelight.netlify.app/)
</div>

---

## ✨ Features

- 🔍 **Live Search** — Filter photos by photographer name in real time
- ❤️ **Favourites** — Save and unsave photos with a heart toggle; count shown in the header
- 💾 **Persistent Favourites** — Saved to `localStorage` so they survive page refreshes
- 💀 **Skeleton Loading** — Animated shimmer placeholders while photos fetch
- ⚠️ **Error State** — Friendly error UI with a retry button on fetch failures
- 🎞️ **Staggered Animations** — Cards animate in with a `fadeUp` stagger effect
- 📱 **Responsive Grid** — 1 → 2 → 4 columns across mobile, tablet, and desktop
- 🌑 **Dark-first Design** — Deep `#0a0a0f` background with purple (`#7c6cfc`) accents
- 🖼️ **Lazy Loading Images** — Deferred image loading for fast initial render

---

## 🗂️ Project Structure

```
framelight/
├── index.html                  # App shell
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── eslint.config.js            # ESLint flat config
├── public/
│   ├── favicon.svg             # App favicon
│   └── icons.svg               # Social icon sprites
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component (state, logic)
    ├── index.css               # Global styles + Tailwind + keyframes
    ├── assets/
    ├── components/
    │   ├── Gallery.jsx         # Photo grid + empty state
    │   ├── PhotoCard.jsx       # Individual card with heart button
    │   └── SearchBar.jsx       # Controlled search input
    └── hooks/
        └── useFetchPhotos.js   # Data fetching hook (Picsum API)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=20.19.0` or `>=22.12.0` (required by Vite 8 + Rolldown)
- **npm** or any compatible package manager

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/framelight.git
cd framelight

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black) | 19.2.4 | UI library |
| ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white) | 8.0.0 | Build tool + dev server |
| ![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | 3.4.19 | Utility-first CSS |
| ![PostCSS](https://img.shields.io/badge/PostCSS-8-DD3A0A?style=flat-square&logo=postcss&logoColor=white) | 8.5.8 | CSS processing |
| ![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint&logoColor=white) | 9.39.4 | Linting |
| ![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=flat-square&logo=netlify&logoColor=white) | — | Hosting & CI/CD |

> **Note:** Vite 8 uses [Rolldown](https://rolldown.rs/) as its bundler instead of Rollup, requiring Node.js ≥ 20.19.0.

---

## 🔌 API

Photos are fetched from the free [Lorem Picsum](https://picsum.photos) API — no API key required.

```
GET https://picsum.photos/v2/list?limit=30
```

Images are rendered via:

```
https://picsum.photos/id/{id}/400/300
```

---

## 🧠 State Management

All state lives inside React — no external library needed.

| State | Mechanism | Notes |
|---|---|---|
| Favourites list | `useReducer` | Actions: `ADD_FAVOURITE`, `REMOVE_FAVOURITE`, `CLEAR_ALL` |
| Search query | `useState` + `useCallback` | Memoized handler to prevent re-renders |
| Filtered photos | `useMemo` | Recomputed only when `photos` or `query` changes |
| Persistence | `useEffect` → `localStorage` | Synced on every favourites change |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Background | `#0a0a0f` | App & card backgrounds |
| Accent | `#7c6cfc` | Brand colour, focus rings, badge |
| Text primary | `#f0f0f5` | Main body text |
| Card border idle | `rgba(255,255,255,0.08)` | Default card border |
| Card border hover | `rgba(255,255,255,0.18)` | Hovered card border |
| Active heart | `#ef4444` | Favourited photo heart icon |

---

## 📦 Deployment

The app deploys to **Netlify** automatically on every push to `main`.

```bash
npm run build   # outputs to dist/
```

---

## 📄 License

MIT © 2026 Framelight

---

<div align="center">

Built with ⚡ Vite + ⚛️ React + 💜 Tailwind

</div>
