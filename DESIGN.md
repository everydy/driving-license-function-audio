# LiCue Design System

LiCue is an exam-practice utility, so the interface should feel calm, operational, and quick to scan. The design system favors dense information, obvious control states, and restrained color rather than a landing-page or marketing treatment.

## Principles

- **Practice first**: the current audio, playback state, and queue hierarchy stay more prominent than brand decoration.
- **Exam cue clarity**: active, queued, stopped, success, warning, and emergency states must be visually distinct without relying on color alone.
- **Static deploy friendly**: no package dependency, icon CDN, build step, or runtime design framework.
- **Token before tweak**: new visual decisions should be expressed through CSS custom properties in `styles.css`.

## Token Model

The CSS uses three token layers:

- `--ref-*`: fixed palette and raw values.
- `--color-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--motion-*`: system decisions.
- component classes such as `.primary-action`, `.tab-button`, `.queue-item`, `.hero-band`: component usage of those decisions.

Compatibility aliases such as `--bg`, `--ink`, `--muted`, and `--accent` remain in place so older component rules can be migrated safely.

## Palette

The palette combines warm paper neutrals, pine/teal controls, blue cue accents, amber waiting states, and red emergency states.

| Role | Token | Use |
| --- | --- | --- |
| App background | `--color-bg` | Page background |
| Surface | `--color-surface` | Panels, controls, list items |
| Surface raised | `--color-surface-raised` | Hover and elevated elements |
| Text | `--color-text` | Main readable text |
| Muted text | `--color-text-muted` | Metadata and helper text |
| Primary action | `--color-action` | Active tabs, primary controls |
| Cue accent | `--color-cue` | Hero and focus support |
| Warning | `--color-warning` | Waiting state |
| Emergency | `--color-danger` | Emergency and stop-state visuals |

## Typography

The app loads Pretendard before the local stylesheet and uses it as the first font family across the UI:

```css
font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

Use the defined type tokens instead of viewport-scaled type. Button and compact panel labels stay smaller and tighter than hero text.

## Shape And Spacing

- Main cards, panels, buttons, and list items use `--radius-md` or smaller.
- Pills use `--radius-pill`.
- Spacing follows `4px` increments through `--space-1` to `--space-12`.
- Fixed-format controls keep explicit min-heights so labels and hover states do not shift layout.

## Interaction States

All clickable controls should include:

- hover: visible border or surface change
- active: pressed transform/shadow
- focus-visible: 3px focus ring with offset
- selected/current: persistent state marker, not just hover styling

## Governance

Record meaningful design decisions in `docs/design-decisions.md`. Add or update component contracts in `docs/design-components/README.md` when new reusable UI patterns are introduced.
