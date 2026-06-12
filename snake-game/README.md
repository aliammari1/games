# 🐍 Classic Snake

A from-scratch **Snake** game in **TypeScript** on the HTML5 canvas/DOM,
organized as small, testable, object-oriented modules. No frameworks, no build
step required to play — just open the compiled `build/index.html`.

🎯 **[▶ Play Now](https://games.pages.dev/snake/)** &nbsp;·&nbsp; ⌨️ Keyboard controls &nbsp;·&nbsp; 🧩 Modular TS &nbsp;·&nbsp; 🧪 Vitest

<p>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white">
  <img alt="Bun" src="https://img.shields.io/badge/runtime-Bun-black?logo=bun">
  <img alt="Vitest" src="https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

<p align="center"><img src="../assets/snake-demo.gif" alt="Snake gameplay" width="420"></p>

---

## 🎮 How to play

1. Open `build/index.html` (or run `bun run start`).
2. Press **Spacebar** to start.
3. Steer with the **Arrow keys** (↑ ↓ ← →).
4. Eat the food to grow and score; don't hit a wall or yourself.

## 🧩 Architecture

Each concern is its own class/module under `src/` — easy to read, easy to test:

| File | Responsibility |
| --- | --- |
| `board.ts` | Game board, state, loop, rendering, key handling, collisions |
| `snake.ts` | Snake movement and growth |
| `food.ts` | Food spawning + placement |
| `score.ts` | Score tracking and display |
| `logic.ts` | Pure, side-effect-free helpers (the Vitest target) |
| `game.ts` | Bootstrap + event wiring |

The pure logic lives in `logic.ts` precisely so it can be unit-tested without a
DOM — the canvas/DOM classes stay thin around it.

## 🚀 Develop

Prereq: [**Bun**](https://bun.sh).

```bash
cd snake-game
bun install
bun run build      # compile src/ -> build/ (tsc)
bun run dev        # tsc --watch
bun run start      # serve build/ locally
```

### Scripts

```bash
bun run build          # tsc
bun run lint           # Biome
bun run test           # Vitest
bun run test:coverage  # coverage
bun run test:e2e       # Playwright
```

## 🧪 Tests

[`tests/logic.test.ts`](tests/logic.test.ts) covers the pure game logic
(collision detection, growth, food placement) with **Vitest**.

## ☁️ Deployment

The `build/` directory is plain static files → ships to **Cloudflare Pages**
under `/snake` (see the [root README](../README.md#-deployment)), and is also
publishable to **itch.io** as an HTML5 game via butler.

## 🔗 Related

- ⭕ **[Tic-Tac-Toe vs unbeatable AI](../Tic-Tac-Toe-Game/)** — the other game in this monorepo.
- 🎮 **[All games →](../README.md)** · 🎮 **[Gold-Rush (C/SDL platformer in WASM)](https://github.com/aliammari1/Gold-Rush)**

## 📄 License

[MIT](LICENSE) © Ali Ammari
