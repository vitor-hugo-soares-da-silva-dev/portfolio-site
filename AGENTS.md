# AGENTS.md

Guidelines for agents working on this repository. Keep changes coherent with what already exists here.

## Project

Personal portfolio built as a fake Hyprland/NixOS desktop UI. React 19 + TypeScript + Vite + Tailwind CSS v4 (Catppuccin Mocha Pink theme). All UI copy is Brazilian Portuguese.

## Commands

Run everything through the project shell when Nix is available:

```sh
nix-shell --run "npm run lint && npm run build"
```

- `npm run dev` — Vite dev server
- `npm run lint` — oxlint
- `npm run build` — `tsc -b && vite build`

Always run lint + build before saying a task is done. Do not add a test framework unless asked; there is none configured.

## Structure

- `src/App.tsx` — 3-column layout (`xl`), responsive ordering, window/view state, navigation.
- `src/components/layout/` — `Waybar` (workspaces/clock), `Tile` (window chrome), `windows.ts` (window metadata).
- `src/components/sections/` — content views rendered inside the central window.
- `src/components/tiles/` — side widgets (matrix, cava, browser monitor, weather, cbonsai, fastfetch).
- `src/components/Terminal.tsx` — fake interactive shell.
- `src/components/ui/` — `Icon`, `Segments` primitives.
- `src/data/site.ts` — single source of truth for content/config.
- `src/data/cbonsai.ts` — pre-generated ASCII trees.
- `src/hooks/` — age, clock, weather, geolocation, browser monitor, cava, matrix.
- `src/assets/images/` — photos (`.webp`).

## Content coherence (important)

- `profile.birthDate` is `2006-11-15`. Derived age/uptime must match this date everywhere (`Waybar`, `FastfetchTile`, `Terminal` help text, `useAge`). If it changes, update all copies of the human-readable date too.
- Weather location is resolved from the browser geolocation (`useGeolocation`). The coordinates in `data/site.ts` are only a fallback when permission is denied or unavailable. Do not hardcode a city as the primary source; keep the fallback clearly labeled as fallback.
- Quotes are exported as a single `quote` (not an array). Use `quote` directly; do not reintroduce `quotes`.
- `projects` is intentionally empty and `projectFilters` contains only `todos.nix`. The projects view is a page index/menu, not a project list. Do not invent projects, categories (`ricing`, `scripts`, `infra`), links, or filters.
- Navigation: menu/index is the `projetos` window; other views are reached via `onNavigate`. A "voltar ao menu" action appears inside the window content when `active !== 'projetos'`.
- Icons must exist in `src/components/ui/Icon.tsx` (`IconName`). There is no `heart`; use `heartbeat`.

## Style conventions

- Follow existing Tailwind utility patterns, Catppuccin tokens (`ctp-pink`, `ctp-mauve`, `ctp-surface*`, etc.), and `font-nerd-mono` for terminal-like text.
- Do not add code comments unless explicitly requested.
- Prefer editing existing files over adding new ones. Keep components small and typed; avoid `any` unless unavoidable (existing code uses it sparingly for mapped data).
- Keep Portuguese UI strings consistent in tone and capitalization.
- Responsiveness first: mobile stacks the central window first; desktop uses 3 columns at `xl`.

## Security / privacy

- Browser monitor collects only local, non-sensitive data (cores, memory, viewport/screen, DPR, FPS, session time). Do not add battery, connection, or identifying data.
- Never commit secrets. External APIs used must stay keyless (Open-Meteo) unless explicitly approved.

## Recent fixes (do not revert)
- Birth date: `profile.birthDate = '2006-11-15'` with `birthDate`/`birthDateLabel` parsed locally (avoid UTC off-by-one). Keep in sync across Waybar, FastfetchTile, Terminal, useAge.
- Weather: use browser geolocation (`useGeolocation`); fallback coords only when denied/unavailable, label as fallback.
- Quotes: single `quote` exported; use Laozi `quote` as currently set. Do not replace with arrays.
- Projects: menu is `projetos` index (`todos.nix`), no fake project lists/filters/categories.
- Navigation: "voltar ao menu" action must be on the left inside window content (not in header). Remove header menu button.
- About: use `aboutText` segments (restored) plus `infoCards`. Do not invent new intro/profile text.
- Dates: always use `birthDateLabel` or local `T00:00:00` parsing to display `15/11/2006`.

## Content ownership (human-only)
- `src/data/*` is human-authored content. **Never** invent, rewrite, "improve", or complete texts/images/citations/pets/education/about/projects. 
- Only structural/type changes necessary for build may touch data files.
- Images, descriptions, citations and pet info must come exactly from the user's provided/authoritative content/history.
- "voltar ao menu" must stay **on the left** inside the window content (not in the Tile header).
- Laozi quotes must use the exact texts/links per section as specified by the user.

## Stable mode (additions only)
- Baseline: current commit is stable. Do not change existing texts, images, citations, pets, education, about, projects, or data values.
- Only add new components/hooks/sections/widgets/assets or purely structural types if strictly necessary for build. Never rewrite or "improve" frozen content.
- `src/data/*` is human-authored and frozen; touch only for mandatory structural build fixes.
- "voltar ao menu" must stay **on the left** inside the window content (not in Tile header).
- Dates: keep `profile.birthDate = '2006-11-15'` and use `birthDate`/`birthDateLabel` with local parsing everywhere.
- Weather: browser geolocation via `useGeolocation` with fallback when denied/unavailable, clearly labeled fallback.
- Quotes: per-section Laozi quotes with exact texts/links as specified by user.
- Keep existing layout/responsiveness as-is unless adding new responsive cases.
- Audio: browser autoplay with sound is blocked; the site uses a `BootScreen` gate. `useAudio().start()` must be called from the boot button click to unlock playback. Music loops and is toggled via Waybar.
