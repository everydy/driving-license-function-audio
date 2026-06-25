# Driving License Function Audio Practice

Korean driving-license closed-course function-test audio practice app.

This is a static HTML/CSS/JavaScript app. It uses bundled MP3 files only and does not require a build step, server framework, package install, or external API.

## Features

- Full sequential playback of the practice flow
- Hierarchical queue display for exam sections
- Function-control practice modes
  - random infinite loop
  - exam-style random two-task set
  - sequential four-task set
- Random emergency prompt loop with configurable wait range
- MP3-only playback with iPhone Safari-friendly user-triggered controls

## Local Preview

```bash
python3 -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/index.html
```

## Netlify

This repo is ready for Netlify static hosting.

- Build command: none
- Publish directory: `.`
- Config file: `netlify.toml`

The site can be deployed by connecting this GitHub repository to Netlify. Netlify will publish the repository root as a static site.

## Project Structure

```text
index.html
styles.css
app.js
netlify.toml
audio/
  manifest.json
  sfx/success-chime.mp3
  *.mp3
```

## Notes

- This is an unofficial practice aid and is not affiliated with a licensing authority.
- The repository intentionally excludes local source videos, ASR models, review clips, transcripts, and generated work files.
- No open-source license has been selected yet.

