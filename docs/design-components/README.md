# LiCue Component Contracts

This registry documents the reusable UI patterns currently used by LiCue. Keep component behavior stable unless `app.js` selectors are updated at the same time.

## Topbar

- Classes: `.topbar`, `.brand-subtitle`, `.status-panel`, `.status-dot`
- Purpose: brand identity and global audio readiness/status.
- State: `.status-dot.is-ready` switches from waiting amber to ready action green.

## Hero Current Clip

- Classes: `.hero-band`, `.hero-copy`, `.hero-actions`, `.hero-action-button`
- Purpose: current audio title, text, file path, and direct playback controls.
- State: `.hero-action-button.is-action-active` marks the last invoked hero action with a persistent border, rail, and pressed-state treatment.

## Buttons

- Classes: `.primary-action`, `.secondary-action`, `.danger-action`, `.warning-action`, `.icon-action`
- Purpose: shared command surfaces.
- Rules:
  - Minimum height is tokenized through `--control-height`.
  - Hover, active, and focus-visible styles must be retained.
  - Icon-only buttons must have an accessible label or title.

## Tabs

- Classes: `.mode-tabs`, `.tab-button`, `.tab-button.is-active`
- Purpose: switch between full sequence, part playback, emergency loop, library, and needed items.
- Rule: active tab uses persistent background and inset marker, not hover styling only.

## Queue Hierarchy

- Classes: `.queue-major-block`, `.queue-middle-block`, `.queue-minor-block`, `.queue-item`
- Purpose: show 대번호, 중번호, 소번호 inclusion without repeating the full file numbering in every visible item label.
- Rule: item counters are local to the containing section; file names remain visible on the right.

## Cards And Panels

- Classes: `.tab-panel`, `.mode-card`, `.needed-item`, `.emergency-stage`, `.clip-button`
- Purpose: grouped controls and repeated library rows.
- Rule: use `--radius-md`; do not nest decorative cards inside cards.

## Emergency Signal

- Classes: `.signal-light`, `.signal-light.is-live`
- Purpose: visible emergency state marker while the random emergency prompt is active.
- Rule: red state must be paired with text status, not color-only meaning.
