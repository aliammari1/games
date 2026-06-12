# Banner / social-preview brief

The README references `assets/banner.png` (wide hero) and a 1280x640 GitHub
social-preview card (Settings -> Social preview). Generate both from the single
art-directed prompt below, then commit the PNGs to `assets/` so they never
rate-limit or 404.

## Direction

Arcade-neon, side-by-side diptych: a coiled pixel **snake** on the left and a
glowing **tic-tac-toe** grid (with a winning X line) on the right, separated by
a thin vertical scanline divider. Dark CRT background (near-black indigo
`#050014`) with a subtle radial glow and faint scanlines. **Electric green
`#39ff14`** for the snake half, **magenta `#ff2bd6`** for the tic-tac-toe half.
Chunky pixel / VT323-style display lettering reading **"ARCADE"** centered, with
a small subtitle **"snake // tic-tac-toe vs unbeatable AI"**. Retro bloom on the
neon, crisp pixels, no photorealism, no gradients-mush. High contrast,
poster-clean, leaves headroom at top/bottom for text overlay.

## The one image-gen prompt (copy/paste)

> Retro arcade-neon banner, side-by-side diptych on a dark CRT screen
> (near-black indigo #050014) with faint scanlines and radial glow. LEFT half:
> a coiled pixel-art snake glowing electric green #39ff14. RIGHT half: a neon
> tic-tac-toe grid in magenta #ff2bd6 with a glowing diagonal winning line of
> three X marks. A thin vertical scanline divides the two halves. Centered
> chunky pixel / VT323 display type reads "ARCADE" with a small subtitle
> "snake // tic-tac-toe vs unbeatable AI". Bloom on the neon, crisp pixels,
> high contrast, poster-clean composition, headroom at top and bottom. No
> photorealism, no people, no text artifacts.

## Outputs to commit

- `assets/banner.png` - wide README hero (recommended 1280x320 or 1600x400).
- `assets/social-preview.png` - 1280x640, set under repo Settings -> Social preview.
- Optional per-game GIFs: `assets/snake-demo.gif`, `assets/ttt-demo.gif`
  (referenced as GIF placeholders in the per-game READMEs).
