# ⭕ Tic-Tac-Toe — with an unbeatable minimax AI

A modern Tic-Tac-Toe built with **Next.js 16 + React 19 + TypeScript**, featuring
a from-scratch **unbeatable minimax AI** (alpha-beta pruned) you can play against.
Ships as a fully static site.

🎯 **[▶ Play Now](https://games.pages.dev/ttt/)** &nbsp;·&nbsp; 🧠 Unbeatable AI &nbsp;·&nbsp; 📱 Responsive &nbsp;·&nbsp; 🌗 Dark/Light

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js">
  <img alt="React" src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

<p align="center"><img src="../assets/ttt-demo.gif" alt="Tic-Tac-Toe vs AI gameplay" width="420"></p>

---

## 🧠 The unbeatable AI

The whole point of this project. "Play vs Computer" runs a dependency-free
**minimax search with alpha-beta pruning** in [`lib/ai.ts`](lib/ai.ts):

- **Never loses.** A Vitest suite ([`tests/ai.test.ts`](tests/ai.test.ts)) plays the AI against an exhaustive opponent and asserts it never loses from any reachable board.
- **Punishes mistakes.** Depth is folded into the score (`10 - depth`), so it picks the *fastest win* / *slowest loss* — not just any non-losing move.
- **Two difficulties.** `hard` = full minimax (unbeatable); `easy` = random legal move with an injectable RNG (deterministic in tests).

```ts
import { bestMove, chooseMove } from "@/lib/ai";

const move = bestMove(board, "O");                 // optimal move, never loses
const move = chooseMove(board, "O", "easy", rng);  // difficulty-aware
```

The human is always **X** and moves first; the computer is **O**. Switch to
**2-player** mode any time.

---

## ✨ Features

- 🧠 **Play vs Computer** (unbeatable `hard` / casual `easy`) or **2-player local**
- ✅ Win + draw detection across all 8 lines
- 🌗 Dark / light theme toggle (next-themes)
- ♿ Accessible: semantic buttons, ARIA labels, keyboard-friendly
- 📱 Responsive, mobile-first layout
- ⚡ **Static export** (`output: "export"`) — no server, hosts anywhere

## 🛠️ Tech stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, Radix UI, Tailwind CSS 3.4, class-variance-authority |
| Icons / themes | lucide-react, next-themes |
| Tooling | Bun, Biome (lint+format), Vitest + Testing Library, Playwright |

## 🚀 Getting started

```bash
cd Tic-Tac-Toe-Game
bun install
bun run dev        # http://localhost:3000
```

### Scripts

```bash
bun run dev            # dev server
bun run build          # static export -> out/
bun run lint           # Biome
bun run typecheck      # tsc --noEmit
bun run test           # Vitest (AI never-loses + component)
bun run test:coverage  # coverage
bun run test:e2e       # Playwright
```

## 📁 Structure

```
Tic-Tac-Toe-Game/
├── app/
│   ├── layout.tsx        # root layout + theme provider
│   ├── page.tsx          # game UI + mode/difficulty + AI turn effect
│   └── globals.css
├── components/
│   ├── theme-provider.tsx
│   ├── themeToggle.tsx
│   └── ui/               # Radix-based button, card, dropdown, toast
├── lib/
│   ├── ai.ts             # ⭐ minimax + alpha-beta
│   └── utils.ts
├── tests/
│   ├── ai.test.ts        # AI correctness (never loses)
│   ├── page.test.tsx     # human move -> AI responds
│   └── setup.ts
├── next.config.mjs       # output: "export", basePath via NEXT_PUBLIC_BASE_PATH
└── vitest.config.ts
```

## ☁️ Deployment

Static export → **Cloudflare Pages** under `/ttt` (built with
`NEXT_PUBLIC_BASE_PATH=/ttt`). The repo-root build assembles both games into one
Pages project; see the [root README](../README.md#-deployment). Also publishable
to **itch.io** as an HTML5 game via butler.

## 🔗 Related

- 🐍 **[Snake](../snake-game/)** — the other game in this monorepo.
- 🎮 **[All games + the minimax write-up →](../README.md)** · 📊 **[github-traffic-analytics](https://github.com/aliammari1/github-traffic-analytics)** · 🤖 **[awesome-ai-tools](https://github.com/aliammari1/awesome-ai-tools)**

## 📄 License

[MIT](LICENSE) © Ali Ammari
