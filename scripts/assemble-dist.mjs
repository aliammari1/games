// Assemble the combined Cloudflare Pages output directory.
//
// Layout produced in dist/:
//   dist/index.html      -> landing page linking to both games
//   dist/_headers        -> Cloudflare Pages security headers (from public/_headers)
//   dist/snake/...       -> snake-game/build (tsc canvas/DOM build)
//   dist/ttt/...         -> Tic-Tac-Toe-Game/out (Next.js static export, basePath=/ttt)
//
// Run after both sub-builds: `bun run scripts/assemble-dist.mjs`.

import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

const snakeBuild = resolve(root, "snake-game", "build");
const tttOut = resolve(root, "Tic-Tac-Toe-Game", "out");
const headersFile = resolve(root, "public", "_headers");

async function main() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });

  if (!existsSync(snakeBuild)) {
    throw new Error(`Missing snake build: ${snakeBuild} (run build:snake first)`);
  }
  if (!existsSync(tttOut)) {
    throw new Error(`Missing TTT export: ${tttOut} (run build:ttt first)`);
  }

  await cp(snakeBuild, resolve(dist, "snake"), { recursive: true });
  await cp(tttOut, resolve(dist, "ttt"), { recursive: true });

  await writeFile(resolve(dist, "index.html"), landingPage(), "utf8");

  // Ship Cloudflare Pages security headers (CSP/HSTS/etc.) at the dist root.
  if (existsSync(headersFile)) {
    await cp(headersFile, resolve(dist, "_headers"));
    console.log("Copied public/_headers -> dist/_headers");
  } else {
    console.warn(`Warning: ${headersFile} missing — deploying without _headers`);
  }

  console.log("Assembled dist/ -> /snake and /ttt");
}

function landingPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Games by Ali Ammari</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0; min-height: 100vh; display: grid; place-items: center;
        font-family: ui-monospace, "VT323", "Courier New", monospace;
        background: radial-gradient(circle at 50% 0%, #15043a, #050014 70%);
        color: #e6e6e6;
      }
      main { text-align: center; padding: 2rem; }
      h1 { font-size: clamp(2rem, 6vw, 4rem); margin: 0 0 .25rem;
        color: #39ff14; text-shadow: 0 0 12px #39ff1480; letter-spacing: .05em; }
      p { color: #ff2bd6; margin: 0 0 2.5rem; }
      .games { display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; }
      a.card {
        display: block; padding: 1.5rem 2.5rem; text-decoration: none; color: #050014;
        font-size: 1.4rem; font-weight: 700; border-radius: 14px;
        transition: transform .15s ease, box-shadow .15s ease;
      }
      a.snake { background: #39ff14; box-shadow: 0 0 24px #39ff1466; }
      a.ttt { background: #ff2bd6; box-shadow: 0 0 24px #ff2bd666; }
      a.card:hover { transform: translateY(-4px) scale(1.03); }
    </style>
  </head>
  <body>
    <main>
      <h1>ARCADE</h1>
      <p>Two browser games. No install. Play now.</p>
      <div class="games">
        <a class="card snake" href="./snake/">🐍 Snake</a>
        <a class="card ttt" href="./ttt/">⭕ Tic-Tac-Toe (vs unbeatable AI)</a>
      </div>
    </main>
  </body>
</html>
`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
