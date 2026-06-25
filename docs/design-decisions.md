# Design Decisions

## 2026-06-26: Establish Token-Based LiCue UI Foundation

**Decision**: Keep the app as a static HTML/CSS/JS surface and establish the design system inside `styles.css` through CSS custom properties.

**Reason**: LiCue is a small one-page audio practice utility. Adding a UI package, icon dependency, or build step would increase deployment and supply-chain surface without improving the core practice flow.

**Constraints**

- No dependency install or CDN icon set.
- Public GitHub repository must not expose source media, ASR artifacts, candidate clips, or local work folders.
- Queue and playback selectors in `app.js` must remain stable.
- Focus, selected, hover, active, waiting, success, and emergency states must stay visibly distinct.

**Adopted Direction**

- Use primitive, semantic, and component-level CSS token naming.
- Preserve older token aliases as compatibility shims during migration.
- Use a warmer neutral background with pine/teal primary controls, blue cue accents, amber waiting states, and red emergency states.
- Keep component radii at `8px` or below except intentional pills.

**Rejected Alternatives**

- Separate `design-system.css`: cleaner file separation, but unnecessary import complexity for the current one-page app.
- Component-render rewrite: useful later if the app gains multiple pages, but too risky for a visual-system pass.

**Verification Standard**

- `node --check app.js`
- JSON validation for `audio/manifest.json`
- Desktop and mobile browser smoke checks
- Contrast spot-checks for key foreground/background token pairs
