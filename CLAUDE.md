# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

> No test suite is configured in this project.

**If `npm run dev` fails with a missing `@rollup/rollup-darwin-arm64` error**, delete `node_modules` and `package-lock.json`, then re-run `npm install`. This is a known npm bug with optional native dependencies.

## Architecture

Single-page React app (React 18 + Vite) structured around three routes: `/` (Home), `/project`, and `/about`. All routes share a persistent `Layout` (header + footer via React Router `<Outlet>`).

### Key patterns

**Global state** — `AppContext` (`src/components/context/app.context.jsx`) holds a single `theme` value (`"light"` | `"dark"`), persisted to `localStorage` and applied via Bootstrap's `data-bs-theme` attribute on `<html>`. Consume with `useCurrentApp()`.

**All portfolio content lives in one file** — `src/helpers/data.js` exports `APP_DATA` (social links), `EXPERIENCES`, `PROJECTS`, and `SKILLS_DATA`. This is the only file to edit when updating portfolio content.

**i18n** — `react-i18next` with `i18next-http-backend` loads translations lazily from `public/locales/{lang}/translation.json`. Default language is `en`. To add a new language, add a folder under `public/locales/` and update `src/i18n.js`.

**Skill icons** — `src/helpers/skill.image.js` maps lowercase skill name strings to imported SVG assets. To add a new skill: import its SVG into `skill.image.js`, add a `case` to the switch, then add the skill name string to `SKILLS_DATA` in `data.js`.

**Theming** — SCSS CSS custom properties are defined per-theme in `src/styles/variable.scss` using two SCSS maps (`$light-theme`, `$dark-theme`) that emit variables into `:root` and `[data-bs-theme="dark"]`. Use `var(--variable-name)` in any component SCSS.

### Directory layout

```
src/
  components/
    context/        # AppContext (theme)
    layout/         # AppHeader, AppFooter
    sections/       # Page sections (hero, about, skill, experience, project)
    share/          # Reusable UI: AnimationLottie, GlowCard
  helpers/
    data.js         # All portfolio data (edit this to customize content)
    skill.image.js  # Skill name → SVG mapping
  pages/            # Route-level components (thin wrappers around sections)
  styles/
    variable.scss   # Theme CSS custom properties
    global.scss     # Global styles
    animation.scss  # Keyframe animations
  i18n.js           # i18next configuration
  main.jsx          # Router setup + app entry
public/
  locales/          # Translation JSON files (en, vi)
```
