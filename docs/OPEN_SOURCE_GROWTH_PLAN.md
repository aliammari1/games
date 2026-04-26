# Open Source Growth Plan

This document turns the repository review into an actionable backlog for improving quality, contributor experience, and star growth.

## Quick wins

- Add a live playable demo link to the README.
- Add animated GIFs for Snake and Tic-Tac-Toe gameplay.
- Add GitHub topics such as `react`, `typescript`, `game`, `nextjs`, and `browser-game`.
- Add a clear roadmap with `good first issue` tasks.
- Add a lightweight leaderboard milestone so users have a reason to return.
- Add component tests for game state transitions and win/loss conditions.

## Bugs and bad practices to watch

- Avoid storing all game state in a single large React object if smaller reducers or hooks make updates easier to test.
- Avoid `any`; keep TypeScript strict.
- Guard against excessive re-renders during timer loops.
- Ensure keyboard controls are accessible and do not trap focus.
- Keep AI opponent logic deterministic under test.

## Star growth strategy

1. Put a playable demo link at the top of the README.
2. Add screenshots and short GIFs.
3. Publish a short article: "Building browser games with React and TypeScript".
4. Add beginner-friendly issues for UI polish, themes, sound effects, and AI difficulty levels.
5. Cross-link the repository from your profile README and portfolio.

## Trending-library opportunities

- Use lightweight agent patterns inspired by Smolagents for AI opponent behavior.
- Use Data-Formulator-style analytics ideas for score and session dashboards.
- Use MarkItDown-like generation for exporting strategy guides and game notes.

## Suggested first PRs after this one

- Add Playwright smoke tests for launching each game.
- Add React Testing Library tests for game state transitions.
- Add demo deployment workflow to GitHub Pages or Vercel.
