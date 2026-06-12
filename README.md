<!-- Banner: generate from BANNER.md, then this renders. -->
![Games — arcade-neon banner](assets/banner.png)

# 🎮 Games

Two small, polished browser games in one Bun monorepo:

- **🐍 Snake** — a classic, written from scratch in TypeScript on the HTML5 canvas, organized as small testable modules.
- **⭕ Tic-Tac-Toe** — a Next.js + React board with an **unbeatable minimax AI** (alpha-beta pruned) you can actually play against.

No installs to play. Both ship as static sites to **one Cloudflare Pages project**.

<p>
  <a href="https://github.com/aliammari1/games/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg"></a>
  <img alt="Bun" src="https://img.shields.io/badge/runtime-Bun-black?logo=bun">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js">
  <img alt="Tested with Vitest" src="https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white">
  <img alt="Deploys to Cloudflare Pages" src="https://img.shields.io/badge/deploy-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white">
</p>

> Suggested GitHub topics: `game` `typescript` `nextjs` `react` `minimax` `tic-tac-toe` `snake-game` `canvas` `bun` `vitest` `cloudflare-pages` `browser-game`

---

## ▶️ Play Now

| Game | Play | Source |
| --- | --- | --- |
| 🐍 **Snake** | **[▶ Play Snake](https://games.pages.dev/snake/)** | [`snake-game/`](snake-game/) |
| ⭕ **Tic-Tac-Toe (vs AI)** | **[▶ Play Tic-Tac-Toe](https://games.pages.dev/ttt/)** | [`Tic-Tac-Toe-Game/`](Tic-Tac-Toe-Game/) |

> The `games.pages.dev` links go live once the Cloudflare Pages project is connected (config is staged — see [Deployment](#-deployment)). Both games are also cross-posted to **itch.io** (HTML5) — see [itch.io](#itchio-html5-cross-post).

<table>
  <tr>
    <td align="center"><strong>🐍 Snake</strong><br><img src="assets/snake-demo.gif" alt="Snake gameplay" width="380"></td>
    <td align="center"><strong>⭕ Tic-Tac-Toe vs unbeatable AI</strong><br><img src="assets/ttt-demo.gif" alt="Tic-Tac-Toe gameplay" width="380"></td>
  </tr>
</table>

---

## 🧠 The unbeatable Tic-Tac-Toe AI

The headline feature. The "Play vs Computer" mode is backed by a from-scratch,
dependency-free **minimax search with alpha-beta pruning** in
[`Tic-Tac-Toe-Game/lib/ai.ts`](Tic-Tac-Toe-Game/lib/ai.ts):

- **Provably never loses.** Tic-Tac-Toe is a solved game; optimal play draws at worst. A Vitest suite plays the AI against an exhaustive opponent and asserts it **never loses from any reachable position**.
- **Plays the punishing line.** Search depth is folded into the score (`10 - depth`), so the AI prefers the *fastest win* and the *slowest loss* — it doesn't just avoid losing, it makes mistakes hurt.
- **Two difficulties.** `hard` = full minimax (unbeatable); `easy` = uniformly random legal move (with an injectable RNG, so it's deterministic in tests).

```ts
export function bestMove(board: Board, aiPlayer: Player): number; // optimal move, never loses
export function chooseMove(board, aiPlayer, "easy" | "hard"): number; // difficulty dispatcher
```

A short write-up — *"an unbeatable Tic-Tac-Toe AI in ~180 lines of TypeScript"* — walks through the minimax + alpha-beta reasoning and the "prefer faster wins" depth trick.

---

## 🗂️ Repository layout

```
games/
├── snake-game/             # TypeScript + canvas Snake (tsc build, Vitest)
│   ├── src/                # board, snake, food, score, game, logic
│   ├── build/              # compiled JS, ready to open in a browser
│   └── tests/              # Vitest logic tests
├── Tic-Tac-Toe-Game/       # Next.js 16 + React 19 board with minimax AI
│   ├── app/                # App Router page + layout
│   ├── components/         # UI (Radix + Tailwind)
│   ├── lib/ai.ts           # ⭐ minimax + alpha-beta AI
│   └── tests/              # Vitest (AI never-loses + component test)
├── scripts/assemble-dist.mjs  # combines both builds into dist/ (/snake + /ttt)
├── wrangler.toml           # one Cloudflare Pages project
├── BANNER.md               # single image-gen prompt for the banner
└── biome.json              # shared lint/format
```

---

## 🚀 Quick start

Prereq: [**Bun**](https://bun.sh) (the package manager + runtime for this repo).

```bash
git clone https://github.com/aliammari1/games.git
cd games
```

### 🐍 Snake

```bash
cd snake-game
bun install
bun run build      # compile src/ -> build/
bun run start      # serve build/ locally
# or just open build/index.html in a browser — no build needed
```

Controls: **Spacebar** to start, **Arrow keys** to steer, eat the food to grow.

### ⭕ Tic-Tac-Toe

```bash
cd Tic-Tac-Toe-Game
bun install
bun run dev        # http://localhost:3000
```

Pick **Play vs Computer** (default) and try to beat `hard`. You can't. 🙂

---

## 🧪 Tests

Both games use **Vitest**. From either package:

```bash
bun run test            # run once
bun run test:watch      # watch mode
bun run test:coverage   # with coverage
```

- **Snake** — pure-logic module tests (collision, growth, food placement).
- **Tic-Tac-Toe** — `tests/ai.test.ts` proves the minimax AI never loses + a `@testing-library/react` test that a human X move triggers an O response.

CI ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) runs lint + typecheck + build + tests for both games on every push/PR.

---

## ☁️ Deployment

Both games are **static**, so they deploy to **one Cloudflare Pages project** under two paths:

- `/snake` ← `snake-game/build` (tsc output)
- `/ttt` ← `Tic-Tac-Toe-Game/out` (Next.js `output: "export"`, `basePath=/ttt`)

```bash
bun run build      # builds both + assembles dist/ (with a landing page)
```

The combined `dist/` is published by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
via `cloudflare/wrangler-action`. Add repo secrets `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` to go live; the deploy job is otherwise skipped.

### itch.io (HTML5 cross-post)

Both games are also publishable to **itch.io** as HTML5 projects using
[**butler**](https://itch.io/docs/butler/) (itch's official CLI), the same
artifacts as the Pages build:

```bash
# zip the static output of one game, then push with butler:
butler push snake-game/build  aliammari1/snake-game:html5
butler push Tic-Tac-Toe-Game/out aliammari1/tic-tac-toe:html5
```

On itch, set the project to **HTML** kind, mark it **"This file will be played
in the browser"**, and (for Snake) point the viewport at `index.html`. This can
be automated in CI with the community `manleydev/butler-publish-itchio-action`.
(itch.io HTML5 publishing steps per the official butler docs: <https://itch.io/docs/butler/>.)

---

## 🛠️ Engineering decisions

- **Bun, not npm/pnpm.** One fast runtime + package manager for both packages; each ships a committed `bun.lock`. (A stray `pnpm-lock.yaml` was removed in the upgrade.)
- **Vitest, not Jest.** Vite-native, fast, ESM-first; the same config style works for the canvas-logic package and the React app (jsdom).
- **Biome, not ESLint/Prettier.** One tool for lint + format across the monorepo (`biome.json`); the dead `.eslintrc.json` and IDE configs were removed.
- **Cloudflare Pages, not Vercel.** Both games are pure static output, so a single free Pages project hosting two paths is the right primitive — no serverless runtime needed. The Vercel-specific config (`vercel.svg`, Azure SWA config) was removed.
- **Static export for Tic-Tac-Toe.** `output: "export"` means the React app is just HTML/JS/CSS — no Node server, identical hosting story to Snake, and it works on itch.io.
- **MIT licensed.** Relicensed from the prior source-available terms so the games can be freely forked, learned from, and reused.

---

## 🤝 Contributing

PRs welcome — see [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
Good first issues: Snake touch controls, high-score persistence, a Claude-powered "move coach" for Tic-Tac-Toe.

## 📄 License

[MIT](LICENSE) © Ali Ammari · [@aliammari1](https://github.com/aliammari1)
