# GROWTH.md — distribution & star kit for `games`

Everything needed to launch the games repo. The hook is the **unbeatable
Tic-Tac-Toe AI you can play in your browser** — concrete, instantly verifiable,
and SEO-rich ("tic tac toe minimax javascript"). Copy/paste the blocks below.

---

## GitHub repo settings (do these first)

### Topics (8–12 exact-match, the literal phrases devs search)

```
minimax
game-ai
tic-tac-toe
snake-game
javascript-game
typescript
cloudflare-pages
browser-game
nextjs
alpha-beta-pruning
canvas
bun
```

### About (160 chars, keyword-front-loaded)

> Two browser games in one Bun monorepo: a TypeScript canvas Snake and a Next.js Tic-Tac-Toe with an unbeatable minimax (alpha-beta) AI. Play now, no install.

### Other settings

- **Social preview**: upload `assets/social-preview.png` (1280×640) under Settings → Social preview.
- Pin the repo on your profile.
- Enable Discussions (gives people a place to say "I couldn't beat it").
- Set the website field to the live `games.pages.dev` URL once Pages is connected.

---

## Show HN

**Title** (links to the live demo, not the repo — HN rewards a thing you can try):

> Show HN: An unbeatable tic-tac-toe you can play in your browser

**URL:** `https://games.pages.dev/ttt/`

**First comment (post immediately, reply to early questions within the hour):**

> Author here. This started as a "can I make an AI that literally cannot lose"
> exercise. The opponent is a from-scratch **minimax search with alpha-beta
> pruning** in ~180 lines of zero-dependency TypeScript — Tic-Tac-Toe's game
> tree is small enough to search exhaustively, so optimal play is provable:
> it draws at worst and punishes any mistake with the fastest winning line.
>
> The fun engineering bit is the test: instead of asserting moves, a Vitest
> suite recursively plays the AI against *every possible* opponent strategy
> from both starting positions and asserts it never reaches a lost state — an
> exhaustive proof of "unbeatable," not a spot check. I also ran Stryker
> mutation testing on the engine to make sure those tests actually pin down the
> behaviour.
>
> Source + a write-up of the minimax/alpha-beta + the "prefer faster wins"
> depth trick: https://github.com/aliammari1/games. There's also a canvas Snake
> in the same Bun monorepo. Happy to go into the search or the static-export /
> Cloudflare Pages setup.

---

## r/javascript

**Title:**

> I built an unbeatable tic-tac-toe (minimax + alpha-beta) in ~180 lines of zero-dep TypeScript — with an exhaustive "never loses" test

**Body:**

> Live demo (play it, you can't win): https://games.pages.dev/ttt/
> Code: https://github.com/aliammari1/games/blob/main/Tic-Tac-Toe-Game/lib/ai.ts
>
> The AI is plain minimax with alpha-beta pruning. Two things I think are worth
> sharing for anyone learning game AI:
>
> 1. **Depth-aware scoring** (`10 - depth` for a win, `depth - 10` for a loss)
>    makes it prefer the *fastest win and slowest loss*, so it punishes
>    mistakes instead of just avoiding defeat.
> 2. **The test is a proof, not samples.** It recursively branches on every
>    legal opponent move at the opponent's turn and plays the AI's chosen move
>    at the AI's turn, asserting the opponent never wins from any reachable
>    board. Plus Stryker mutation testing to keep the suite honest.
>
> Stack is Bun + Next.js (static export) + Vitest, deployed to one Cloudflare
> Pages project alongside a canvas Snake. Happy to answer questions about the
> search, the static export, or the mutation-testing setup.

(Subreddit etiquette: build a little karma first; lead with the technique, not the repo.)

---

## r/learnprogramming

**Title:**

> Minimax + alpha-beta pruning, explained with a tic-tac-toe you can actually play

**Body:**

> When I was learning game AI, "minimax" finally clicked once I could *see* it
> lose-proof a real game. So I built one you can play in the browser and read
> the (commented, ~180-line) source of:
>
> - Play: https://games.pages.dev/ttt/  (try to win — you can't)
> - Code + explanation: https://github.com/aliammari1/games
>
> The short version:
> - Minimax explores the game tree; the AI maximizes its score and assumes you
>   always play your best reply.
> - Tic-Tac-Toe's tree is tiny, so it searches the whole thing → provably
>   optimal (draws at worst).
> - Alpha-beta pruning skips branches that can't change the result — same
>   answer, far fewer nodes.
> - A depth term makes it prefer faster wins, so it feels like it's actually
>   trying to beat you.
>
> If you're learning this, reading `lib/ai.ts` next to the live game is the
> fastest way to make it stick. Ask me anything.

---

## Awesome-list submission lines

**awesome-jsgames** (`proyecto26/awesome-jsgames`) — add under an appropriate category:

```markdown
- [Tic-Tac-Toe (unbeatable minimax AI)](https://games.pages.dev/ttt/) - Play tic-tac-toe against a provably-unbeatable minimax + alpha-beta AI; zero-dependency TypeScript, [open source](https://github.com/aliammari1/games).
- [Snake](https://games.pages.dev/snake/) - Classic canvas Snake in modular, tested TypeScript. [Source](https://github.com/aliammari1/games).
```

Also consider: **awesome-cloudflare** (Pages example), and once the engine is
published, **the npm `unbeatable-tictactoe` package** → submit to relevant
game-AI lists.

---

## Wave 2 — `unbeatable-tictactoe` npm package

The minimax engine (`Tic-Tac-Toe-Game/lib/ai.ts`) is already zero-dependency,
fully typed, and 100%-covered + mutation-tested. To extract it:

1. New package `unbeatable-tictactoe` exporting `bestMove`, `chooseMove`,
   `minimax`, `winner`, `availableMoves`, and the `Board`/`Player` types.
2. Build ESM + CJS + `.d.ts` (tsup), ship the existing Vitest suite.
3. README = the minimax explainer from this repo + a runnable snippet + a link
   to the live demo as the "see it in action" proof.
4. Crowded-but-weak npm field → aim to be the canonical, *tested* one.

Then cross-link: repo README badge → npm, npm README → live demo → repo star CTA.

---

## Launch-day checklist

- [ ] Cloudflare Pages connected; `games.pages.dev/snake/` and `/ttt/` both live.
- [ ] `assets/ttt-demo.gif` + `assets/snake-demo.gif` recorded; banner + social-preview generated (see `BANNER.md`).
- [ ] Topics + About + social preview set on GitHub.
- [ ] Post **Show HN** Tue–Thu ~13:00–16:00 UTC; seed first comment immediately; reply within the hour.
- [ ] Cross-post r/javascript + r/learnprogramming (space them out a day).
- [ ] Submit the awesome-jsgames PR.
- [ ] (Wave 2) publish `unbeatable-tictactoe` to npm, then re-share with "now installable."
```
