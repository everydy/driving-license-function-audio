# Research

## Goal

Build a design-system foundation for LiCue so the app has stable color, typography, radius, spacing, component, and interaction rules before further UI redesign.

## Scope And Entry Points

- Target screen: `/Users/moonsoo/projects/driving-license-function-audio/index.html`
- Style owner: `/Users/moonsoo/projects/driving-license-function-audio/styles.css`
- Behavior owner: `/Users/moonsoo/projects/driving-license-function-audio/app.js`
- Public docs surface: `DESIGN.md`, `docs/design-decisions.md`, `docs/design-components/README.md`
- Review target: local app at `http://127.0.0.1:8765/index.html`

## Relevant Files

- `/Users/moonsoo/projects/driving-license-function-audio/index.html`
- `/Users/moonsoo/projects/driving-license-function-audio/styles.css`
- `/Users/moonsoo/projects/driving-license-function-audio/app.js`
- `/Users/moonsoo/projects/driving-license-function-audio/README.md`
- `/Users/moonsoo/projects/driving-license-function-audio/.gitignore`
- `/Users/moonsoo/projects/driving-license-function-audio/docs/plans/2026-06-26-licue-branding.md`

## Current Behavior

The app is a static MP3 practice tool with one main route. It already has clear functional sections: topbar, hero/current clip, mode tabs, full queue, parts modes, emergency loop, audio library, and needed-items list.

The current visual system is usable but not governed:

- `styles.css` has a small root palette with aliases such as `--bg`, `--ink`, `--muted`, `--accent`, `--blue`, `--red`, and `--amber`.
- Many values are hard-coded in component rules: `8px`, `18px`, `22px`, `42px`, `rgba(...)`, and direct hex values.
- There is no `DESIGN.md`, no design decision log, and no component registry.
- `.gitignore` currently ignores `docs/`, which blocks public design-system docs from being tracked unless the ignore rule changes.

## Data Flow And Control Flow

1. `index.html` loads `styles.css` and `app.js`.
2. `app.js` creates app state from in-file clip arrays and updates visible current clip, status chip, queues, tabs, and hero action state.
3. `styles.css` owns all visual tokens, layout, button states, queue hierarchy, responsive behavior, and hero treatment.
4. There is no build step, so every design-system change must remain static CSS/HTML/JS and Netlify-root compatible.

## Existing Abstractions And Boundaries

- CSS custom properties in `:root` are the right foundation boundary.
- Button-like controls already share `.primary-action`, `.secondary-action`, `.icon-action`, `.tab-button`, `.clip-button`, and `.queue-item`.
- Queue hierarchy is rendered by `renderQueueList()` in `app.js`; styling should not change queue semantics or file references.
- Icons are inline SVG, not external icon packages, due the static deployment and supply-chain freeze.
- `work/`, source media, ASR models, candidate audio, and review segments must remain excluded from public Git.

## Side Effects And Integration Points

- Public GitHub and Netlify will expose any committed docs and design artifacts.
- Changing `.gitignore` to track selected design docs must not expose ignored local artifacts under `docs/`, `work/`, `downloads/`, or `models/`.
- Design-system changes can affect readability, mobile wrapping, keyboard focus, and audio-control discoverability.

## Risk To Surrounding Systems

- Large visual changes could break the dense operational feel and make the app look like a marketing page.
- Changing selectors used by `app.js` could break playback and queue state.
- Hard-coding new colors without token names would recreate the current governance problem.
- Overly subtle state styling could fail focus/active visibility.
- Too much blue/teal could create a one-note palette.

## Do Not Duplicate Or Bypass

- Do not introduce a package dependency or CDN icon set.
- Do not duplicate clip metadata or rebuild the queue renderer.
- Do not add a design system in a separate CSS file unless the static root contract changes.
- Do not publish private source media, ASR, or work artifacts while adding design docs.

## Open Questions

- Whether the final Netlify site name will use `licue` or another short slug remains outside this visual-system pass.
- Whether the app should support dark mode is deferred; current scope is a light, exam-practice UI.

## Solution Options

### Option 1: Tokenize current CSS in place and document the system

- Operating principle: Keep the static architecture and migrate root variables into primitive, semantic, and component-oriented tokens.
- Supporting evidence: The current app already centralizes many values in `styles.css`.
- Fit conditions: Best for low-risk redesign and immediate implementation.
- Failure modes: Some old aliases may remain as compatibility shims.
- Implementation implication: Update `:root`, key component CSS, and add design docs.

### Option 2: Create a separate design-system CSS module

- Operating principle: Move tokens/components to a new CSS file and import it from `index.html`.
- Supporting evidence: Cleaner separation between foundation and page styles.
- Fit conditions: Better if the app grows multiple routes.
- Failure modes: More files and import boundaries for a one-page static app.
- Implementation implication: Add `design-system.css` and update HTML loading order.

### Option 3: Rewrite the UI around component render helpers

- Operating principle: Convert repeated markup into JS render helpers and CSS contracts.
- Supporting evidence: Queue and library already use JS-generated controls.
- Fit conditions: Better when multiple pages or custom states are planned.
- Failure modes: Larger behavior regression surface and unnecessary complexity now.
- Implementation implication: Defer until repeated components exceed CSS primitive needs.

## Plan Implications

- Adopt Option 1 now.
- Add public design governance files: `DESIGN.md`, `docs/design-decisions.md`, and `docs/design-components/README.md`.
- Adjust `.gitignore` so only selected design docs/plans/research are tracked, without exposing old local artifacts.
- Build one HTML specimen for plan review because this is a visible design-system change.
- Tokenize colors, type, spacing, radius, shadow, motion, and icon sizes in `styles.css`.
- Preserve all selectors that `app.js` relies on.
- Verify desktop and mobile layouts with Playwright.

## Source Evaluation

| Source | Claim used | Evidence lane | Score | Decision |
| --- | --- | --- | --- | --- |
| Local app files | Current UI is static, one-route, and CSS-owned | codebase | A | Adopt |
| Material Web theming docs | Tokens map reference values to system and component roles; CSS custom properties are an appropriate web vehicle | official | A | Adopt |
| W3C WCAG contrast minimum | Normal text should meet 4.5:1 contrast, large text 3:1 | official | A | Adopt |
| W3C WCAG focus appearance | Focus indicators should be sufficiently large and have a 3:1 visible change target | official | A | Adopt |

## Evidence

- Local inspection: `find . -maxdepth 3 ...` showed no `DESIGN.md`, `docs/design-decisions.md`, or component registry.
- Local inspection: `styles.css` contains mixed root aliases and hard-coded values.
- Local Git state: `main...origin/main`, latest implementation commit `6ca8652 Add hero action icons and pressed states`.
- Material Web theming: https://material-web.dev/theming/material-theming/
- WCAG Focus Appearance: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- WCAG Contrast Minimum: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
