# 2026-06-26 | LiCue Design System Implementation Plan

## Skill Routing Manifest

- `디자인올인원`: used for design-system routing, foundations, components, accessibility, and dev sync.
- `research`: used to capture local and external evidence in `docs/research/licue-design-system/research.md`.
- `plan-first-implementation`: used to make the implementation plan explicit before coding.
- `해결전략검토`: used to review the strategy before implementation.
- `review-all-in-one`: used to review plan quality and later implementation diff.
- `구현커밋`: used to execute the plan through code, verification, commit, and push.
- `테스트`: used for final local preview and verification handoff.

## 검토용 결과물

- Plan: `docs/plans/2026-06-26-licue-design-system.md`
- Visual artifact: `docs/plans/artifacts/2026-06-26-licue-design-system.html`
- Design entry: `DESIGN.md`
- Decision log: `docs/design-decisions.md`
- Component registry: `docs/design-components/README.md`
- Local app: `http://127.0.0.1:8765/index.html`

## Research Summary

Local inspection showed the current app is a one-page static HTML/CSS/JS tool. `styles.css` already has shallow root variables, but many hard-coded colors, spacing values, radii, shadows, and state styles remain scattered through component rules. There is no public design-system documentation yet, and `.gitignore` currently blocks `docs/` from being tracked.

External official guidance used:

- Material Web theming: token layers can map reference values into system and component decisions.
- WCAG Contrast Minimum: normal text should meet 4.5:1 contrast, with large text at 3:1.
- WCAG Focus Appearance: visible focus indicators need sufficient size and contrast.

## Operator 결정 필요 사항

No blocking operator decision is required for this pass. The implementation will keep the app static, avoid package/dependency work, and use the existing LiCue branding.

Deferred decisions:

- Final Netlify site slug.
- Dark mode.
- Larger layout rewrite for future multi-page app growth.

## 해결전략검토

### Verdict

조건부 적절. The lowest-risk path is to tokenize the current CSS in place, add public governance docs, and preserve all HTML/JS selectors.

### Risks

- **Docs exposure risk**: allowing `docs/` globally could expose old private planning artifacts.
- **Selector regression risk**: changing class names or IDs could break playback and queue rendering.
- **Palette risk**: overusing teal/blue could make the UI feel one-note.
- **Accessibility risk**: visually subtle focus and selected states could be hard to distinguish.

### Strengthened Strategy

- Use `.gitignore` allowlisting instead of a broad `docs/` allow.
- Keep existing class names and IDs.
- Preserve a mixed palette: warm neutrals, pine/teal action, blue cue, amber waiting, red emergency.
- Add tokenized focus rings, active shadows, and persistent selected/current styling.

## Review-All-In-One Plan Review

### Findings

No blocker found in the plan. The main implementation risk is visual regression from a large CSS edit, so verification must include browser smoke checks on desktop and mobile widths.

### Code Snippet Direction

Root tokens should follow this structure:

```css
:root {
  --ref-paper-50: #fbfaf6;
  --ref-pine-800: #16483f;
  --color-bg: var(--ref-paper-50);
  --color-action: var(--ref-pine-800);
  --space-4: 16px;
  --radius-md: 8px;
  --control-height: 42px;
}
```

Component states should consume tokens:

```css
.tab-button.is-active {
  background: var(--color-action);
  color: var(--color-on-action);
  box-shadow: var(--shadow-state-selected);
}
```

## Implementation Plan

### Phase 1: Research And Baseline

- Confirm current app architecture and selectors.
- Capture research in `docs/research/licue-design-system/research.md`.
- Identify public docs and ignored local artifacts.

### Phase 2: Public Design Governance

- Add `DESIGN.md`.
- Add `docs/design-decisions.md`.
- Add `docs/design-components/README.md`.
- Update `.gitignore` to allowlist only public docs and relevant plan/research artifacts.

### Phase 3: Tokenized Foundations

- Expand `:root` with primitive, semantic, spacing, type, radius, shadow, motion, and component-height tokens.
- Preserve legacy aliases for compatibility.
- Replace hard-coded app-shell, surface, text, border, shadow, and radius values with tokens.

### Phase 4: Component And State Alignment

- Align hero, buttons, tabs, queue hierarchy, cards, emergency panel, and library controls with the token system.
- Strengthen hover, active, selected, and focus-visible states.
- Keep the app operational and dense, not marketing-like.

### Phase 5: Verification And Review

- Run static JS and JSON validation.
- Run contrast spot checks for key token pairs.
- Run desktop and mobile browser smoke checks.
- Inspect the diff from a review stance before commit.

## Success Criteria

- The app still works as a static root-deployed Netlify site.
- The visual system is documented and public-safe.
- CSS decisions are centralized in tokens.
- Desktop and mobile views render without overlap or blank states.
- Keyboard focus and selected states are visibly distinguishable.
