# 🎮 Games Collection Repository

A curated collection of modern browser-based games and interactive demos built with TypeScript, React, and Next.js. This repository showcases clean code architecture, responsive design, and best practices in game development and web application design.

**Repository Owner:** Ali Ammari  
**Contact:** ammari.ali.0001@gmail.com  
**License:** Custom Commercial Use License (see [LICENSE](LICENSE) for details)

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Projects Overview](#projects-overview)
  - [Classic Snake Game](#classic-snake-game)
  - [Tic-Tac-Toe Game](#tic-tac-toe-game)
- [Repository Structure](#repository-structure)
- [System Requirements](#system-requirements)
- [Installation & Setup](#installation--setup)
- [Development Guide](#development-guide)
- [Project-Specific Details](#project-specific-details)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License Information](#license-information)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Credits & Acknowledgements](#credits--acknowledgements)

---

## 🚀 Quick Start

### Play Snake Game Immediately (No Build Required)

```bash
# Clone the repository
git clone https://github.com/aliammari1/games.git
cd games

# Option 1: Open in browser directly (simpler)
cd snake-game
start build/index.html  # Windows
open build/index.html   # macOS
xdg-open build/index.html  # Linux

# Option 2: Serve locally (recommended for better compatibility)
cd snake-game
npx http-server build -o
```

### Run Tic-Tac-Toe with Next.js Dev Server

```bash
# Clone and navigate
git clone https://github.com/aliammari1/games.git
cd games/Tic-Tac-Toe-Game

# Install dependencies
pnpm install  # or: npm install

# Start development server
pnpm dev  # or: npm run dev

# Open http://localhost:3000 in your browser
```

### Live Demo

- **Tic-Tac-Toe:** [Play Live](https://tic-tac-toe-game-aliammari1.vercel.app/)
- **Snake Game:** [Play Online](https://aliammari1.github.io/snake-game/)

---

## 📦 Projects Overview

This collection contains two independent game projects, each with distinct technology stacks and gameplay mechanics.

### Classic Snake Game

**A nostalgic yet modern implementation of the timeless Snake arcade game.**

**Technology Stack:**
- **Language:** TypeScript 5.9.3
- **Build Tool:** TypeScript Compiler (tsc)
- **Runtime:** Node.js + Browser
- **Version:** 2.0.0

**Key Features:**
- 🎮 Classic gameplay with modern mechanics
- 🏆 Real-time score tracking and game statistics
- ⌨️ Keyboard controls (Spacebar to start, Arrow keys to move)
- 📱 Responsive HTML5 Canvas rendering
- 🎨 Clean visual design with intuitive UI
- 🔄 Collision detection and game state management

**Architecture Highlights:**
- **Modular Design:** Classes for Board, Snake, Food, Score, and Game Logic
- **Object-Oriented:** Private class fields, encapsulation, separation of concerns
- **Type Safety:** Full TypeScript coverage with strict type checking
- **Performance:** Optimized rendering and collision detection

**Directory Structure:**
```
snake-game/
├── src/                  # TypeScript source code
│   ├── board.ts         # Board class: game state, rendering, game loop
│   ├── snake.ts         # Snake class: movement, growth, collision logic
│   ├── food.ts          # Food class: random placement and rendering
│   ├── score.ts         # Score class: tracking and display
│   ├── game.ts          # Main game initialization and event handling
│   ├── index.html       # Main HTML file
│   └── style.css        # Stylesheet
├── build/               # Pre-compiled JavaScript, ready to play
│   ├── index.html
│   ├── *.js            # Compiled TypeScript output
│   └── style.css
├── package.json         # Dependencies and build scripts
├── tsconfig.json        # TypeScript configuration
├── README.md            # Project-specific documentation
├── LICENSE              # Project-specific license
└── CODE_OF_CONDUCT.md   # Community guidelines
```

**How to Play:**
1. Open `build/index.html` or use a local HTTP server
2. Press **Spacebar** to start the game
3. Use **Arrow Keys** (↑ ↓ ← →) to control the snake
4. Eat food (🔵) to grow and increase your score
5. Avoid hitting the walls or the snake's own body
6. Game ends on collision; press Spacebar to restart

**Development Commands:**
```bash
cd snake-game

# Install dependencies (optional, for development)
pnpm install  # or: npm install

# Compile TypeScript to JavaScript
pnpm build    # or: npm run build

# Run with Node.js (for testing)
pnpm start    # or: npm start

# Watch and compile on changes
pnpm dev      # or: npm run dev
```

**Game Mechanics:**
- **Snake Movement:** Continuous movement in the current direction
- **Growth:** Snake grows by 1 segment for each food consumed
- **Scoring:** 1 point per food eaten; displayed in real-time
- **Collision Detection:** Game ends on wall or self-collision
- **Responsive Controls:** Arrow keys respond instantly to direction changes

---

### Tic-Tac-Toe Game

**A modern, feature-rich Tic-Tac-Toe implementation with a beautiful UI and smooth animations.**

**Technology Stack:**
- **Framework:** Next.js 16.0.4 (App Router)
- **Language:** TypeScript 5.9.3
- **React Version:** 19.2.0
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Radix UI + Class Variance Authority
- **Package Manager:** pnpm (also supports npm)
- **Version:** 2.0.0

**Key Features:**
- 🎨 **Modern UI:** Clean, minimalist design with Tailwind CSS
- 🎭 **Theme Toggle:** Dark mode and light mode support
- 📱 **Fully Responsive:** Optimized for desktop, tablet, and mobile
- ⚡ **Smooth Animations:** Micro-interactions and transitions
- ♿ **Accessible:** WCAG compliant with keyboard navigation
- 🎮 **Game Features:**
  - Two-player local gameplay (Player X vs Player O)
  - Automatic win detection (8 winning combinations)
  - Draw/tie detection
  - Score tracking across multiple games
  - Game reset and quick restart
- 🔍 **SEO Optimized:** Meta tags and structured data
- 📲 **PWA Ready:** Progressive Web App capabilities
- 🚀 **Performance:** Server-side rendering and static optimization

**Architecture Highlights:**
- **Next.js App Router:** Modern file-based routing
- **Component-Based:** Reusable, composable React components
- **TypeScript Strict Mode:** Full type safety across the application
- **Utility-First CSS:** Tailwind CSS for rapid, maintainable styling
- **Accessibility First:** ARIA labels, semantic HTML, keyboard support

**Directory Structure:**
```
Tic-Tac-Toe-Game/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main game page component
│   └── globals.css      # Global styles
├── components/          # Reusable React components
│   ├── theme-provider.tsx    # Theme context provider
│   ├── themeToggle.tsx       # Dark/light mode toggle button
│   ├── ui/              # UI component library
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   └── [other components]
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
├── public/              # Static assets (images, icons, etc.)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS customization
├── next.config.mjs      # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
├── README.md            # Project-specific documentation
├── LICENSE              # Project-specific license
├── CONTRIBUTING.md      # Contributing guidelines
└── .eslintrc.json       # ESLint configuration
```

**How to Play:**
1. Start the dev server: `pnpm dev`
2. Open http://localhost:3000
3. Click cells to place X (first player) or O (second player)
4. Get three in a row (horizontal, vertical, or diagonal) to win
5. Track scores across multiple games in the score panel
6. Toggle dark/light theme with the theme button
7. Use keyboard navigation for accessibility

**Development Commands:**
```bash
cd Tic-Tac-Toe-Game

# Install dependencies
pnpm install  # or: npm install

# Run development server (with hot reload)
pnpm dev      # or: npm run dev
# Access at http://localhost:3000

# Build for production
pnpm build    # or: npm run build

# Start production server
pnpm start    # or: npm start

# Lint code with ESLint
pnpm lint     # or: npm run lint
```

**Game Mechanics:**
- **Grid:** Standard 3×3 board
- **Turns:** Players alternate between X and O
- **Win Condition:** Three symbols in a row (8 possible combinations)
- **Draw:** All 9 squares filled with no winner
- **Score Tracking:** Persistent score counter for X wins, O wins, and draws
- **Reset:** One-click game reset for continuous play

---

## 🗂️ Repository Structure

```
games/
├── README.md                    # This comprehensive guide
├── LICENSE                      # Repository-level license (Custom Commercial Use)
├── CONTRIBUTING.md              # Contribution guidelines for the repository
├── CODE_OF_CONDUCT.md           # Contributor Code of Conduct
│
├── snake-game/                  # Classic Snake Game (TypeScript)
│   ├── src/                     # TypeScript source files
│   ├── build/                   # Pre-compiled, ready-to-play version
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│   ├── LICENSE
│   ├── CODE_OF_CONDUCT.md
│   └── CONTRIBUTING.md
│
└── Tic-Tac-Toe-Game/            # Modern Tic-Tac-Toe (Next.js + React)
    ├── app/                     # Next.js App Router
    ├── components/              # React components
    ├── lib/                     # Utility functions
    ├── public/                  # Static assets
    ├── package.json
    ├── tsconfig.json
    ├── next.config.mjs
    ├── tailwind.config.ts
    ├── postcss.config.mjs
    ├── README.md
    ├── LICENSE
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    └── .eslintrc.json
```

---

## 💻 System Requirements

### Minimum Requirements
- **Node.js:** v16.0.0 or higher (LTS 18.x or 20.x recommended)
- **Package Manager:** npm 8.x, yarn 3.x, or pnpm 7.x
- **Browser:** Any modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **OS:** Windows, macOS, or Linux

### Development Requirements
- **Text Editor:** VS Code, WebStorm, or similar
- **Git:** For version control
- **TypeScript Knowledge:** Basic understanding of TypeScript (for Snake game modifications)
- **React Knowledge:** Basic understanding of React (for Tic-Tac-Toe modifications)

### Optional Tools
- **ESLint:** For code linting (configured in Tic-Tac-Toe)
- **Prettier:** For code formatting
- **http-server or serve:** For serving static files locally
- **Vercel CLI:** For deployment (Tic-Tac-Toe is Vercel-ready)

---

## 🔧 Installation & Setup

### Clone the Repository

```bash
# Clone using HTTPS
git clone https://github.com/aliammari1/games.git

# Or clone using SSH
git clone git@github.com:aliammari1/games.git

# Navigate to the project
cd games
```

### Global Setup (Optional)

```bash
# Install pnpm globally (recommended)
npm install -g pnpm

# Verify installations
node --version    # Should be v16+
npm --version     # Should be 8+
git --version     # Should be 2.0+
pnpm --version    # If installed globally
```

### Project-Specific Setup

#### Snake Game
```bash
cd snake-game

# Option A: Play pre-compiled version (no setup needed)
npx http-server build -o

# Option B: Modify and recompile
pnpm install
pnpm build
npx http-server build -o
```

#### Tic-Tac-Toe Game
```bash
cd Tic-Tac-Toe-Game

# Install dependencies
pnpm install  # or: npm install

# Start development server
pnpm dev

# Open browser to http://localhost:3000
```

---

## 🛠️ Development Guide

### General Workflow

1. **Fork the Repository:** Create a personal fork on GitHub
2. **Create a Feature Branch:** Use descriptive names
   ```bash
   git checkout -b feat/add-new-feature
   # or
   git checkout -b fix/resolve-issue
   ```
3. **Make Changes:** Edit files and test locally
4. **Run Project-Specific Checks:** Lint, build, test (see below)
5. **Commit Changes:** Use clear, descriptive commit messages
   ```bash
   git commit -m "feat: add new feature description"
   ```
6. **Push to Fork:** Push your branch to your fork
   ```bash
   git push origin feat/add-new-feature
   ```
7. **Open Pull Request:** Create a PR against `main` branch in upstream repo
8. **Respond to Feedback:** Address code review comments

### Snake Game Development

**Modifying Game Logic:**

1. Edit TypeScript files in `src/`:
   - `snake.ts` - Snake movement and growth
   - `food.ts` - Food spawning logic
   - `board.ts` - Game loop and rendering
   - `score.ts` - Score tracking
   - `game.ts` - Initialization

2. Recompile:
   ```bash
   cd snake-game
   pnpm build  # Compiles src/ to build/
   ```

3. Test in browser:
   ```bash
   npx http-server build -o
   ```

**Example: Increase Game Speed**
1. Open `src/board.ts`
2. Find the game loop interval (typically 50-100ms)
3. Decrease the value (e.g., from 100 to 75ms)
4. Run `pnpm build` and test

**Example: Change Board Size**
1. Open `src/board.ts`
2. Modify board dimensions (default 20×20)
3. Update canvas size in `index.html`
4. Rebuild and test

### Tic-Tac-Toe Game Development

**Modifying UI Components:**

1. Edit React components in `components/`:
   ```bash
   # For UI changes
   vim components/page.tsx

   # For styling (Tailwind CSS classes in component files)
   ```

2. Start dev server (hot reload enabled):
   ```bash
   pnpm dev
   ```

3. Changes auto-refresh in browser

**Example: Change Board Size**
1. Open `app/page.tsx`
2. Modify grid template: `grid-cols-3` → `grid-cols-4`
3. Update game logic for 4×4 gameplay
4. Dev server updates automatically

**Example: Add AI Opponent**
1. Create `lib/ai.ts` with minimax algorithm
2. Import and use in `app/page.tsx`
3. Add AI toggle in UI
4. Test with dev server

### Testing Locally

**Snake Game:**
- Open `build/index.html` or serve with http-server
- Test keyboard controls (arrows, spacebar)
- Check score incrementing correctly
- Verify collision detection

**Tic-Tac-Toe:**
- Start dev server: `pnpm dev`
- Test game flows (X win, O win, draw)
- Check theme toggle works
- Test on mobile (device or DevTools)
- Verify keyboard navigation

### Code Quality

**Linting (Tic-Tac-Toe only):**
```bash
cd Tic-Tac-Toe-Game
pnpm lint
```

**Building for Production:**
```bash
# Snake Game
cd snake-game
pnpm build  # Creates optimized build/

# Tic-Tac-Toe
cd Tic-Tac-Toe-Game
pnpm build  # Creates optimized .next/ directory
pnpm start  # Runs production build
```

---

## 📘 Project-Specific Details

### Snake Game Detailed Notes

**Architecture Overview:**
- Uses Canvas API for rendering
- Game loop runs at ~60 FPS with configurable update interval
- Each entity (snake, food, board) is a separate class
- State is managed centrally in the Board class

**Key Classes:**
- `Board`: Manages game state, rendering canvas, game loop
- `Snake`: Handles movement, growth, collision detection
- `Food`: Manages food spawning and rendering
- `Score`: Tracks and displays score
- `Game`: Initializes game and sets up event listeners

**Configuration:**
- Board dimensions: Modify in `board.ts` constructor
- Game speed: Adjust `gameLoopInterval` in `board.ts`
- Colors: Change in `style.css`
- Initial snake size: Modify in `snake.ts`

**Performance Tips:**
- Pre-render canvas elements when possible
- Use RequestAnimationFrame for smooth animation
- Minimize DOM manipulations

### Tic-Tac-Toe Game Detailed Notes

**Architecture Overview:**
- Uses React hooks (useState, useEffect) for state management
- Next.js App Router for file-based routing
- Tailwind CSS for styling (no CSS-in-JS)
- Component composition for reusability

**Key Components:**
- `page.tsx`: Main game logic and board rendering
- `theme-provider.tsx`: Theme context for dark/light mode
- `themeToggle.tsx`: Theme switching UI
- `ui/*`: Pre-built accessible UI components

**Configuration:**
- Themes: Customize in `tailwind.config.ts`
- Board appearance: Modify Tailwind classes in `page.tsx`
- Winning combinations: See game logic in `page.tsx`

**Performance Optimizations:**
- Server-side rendering (Next.js)
- Code splitting (automatic via Next.js)
- Image optimization (if images added)
- CSS minimization (Tailwind production build)

**Deployment:**
- Tic-Tac-Toe is Vercel-optimized
- Live demo: https://tic-tac-toe-game-aliammari1.vercel.app/
- Deploy to Vercel: Push to GitHub, connect Vercel, auto-deploy

---

## 🤝 Contributing

We welcome contributions of all types:

- **Code:** Bug fixes, features, optimizations
- **Documentation:** Typo fixes, clarifications, examples
- **Design:** UI/UX improvements, accessibility enhancements
- **Testing:** Bug reports, test cases, edge case findings

### Contributing Process

1. **Check Existing Issues:** Avoid duplicate work
2. **Create an Issue:** For significant changes, discuss first
3. **Fork & Branch:** Create a descriptive branch name
4. **Make Changes:** Keep commits small and focused
5. **Test Thoroughly:** Run local tests before submitting
6. **Submit PR:** Include motivation and testing instructions
7. **Respond to Feedback:** Address review comments promptly

### Contribution Guidelines

- **Code Style:** Follow existing patterns in the project
- **Comments:** Add comments for complex logic
- **Commits:** Use clear, descriptive commit messages
- **PRs:** Include what changed and why
- **Testing:** Provide manual testing instructions

### What We're Looking For

✅ **Good Contributions:**
- Small, focused changes
- Clear motivation
- Tested thoroughly
- Well-documented (if needed)
- Respectful tone

❌ **Avoid:**
- Large, unfocused changes
- Undocumented major refactors
- Breaking changes without discussion
- Code style inconsistencies

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## 📋 Code of Conduct

This project follows the Contributor Covenant Code of Conduct. By participating, you agree to uphold standards of respect and inclusivity.

**Our Community Standards:**
- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy toward other community members

**Reporting Issues:**
If you experience or witness unacceptable behavior, please report it:
- **Email:** ammari.ali.0001@gmail.com
- **Subject:** Include "Code of Conduct Report" in subject
- **Details:** Provide context and details of the incident

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for full details.

---

## 📄 License Information

### Repository-Level License

This repository is governed by a **Custom Commercial Use License** (see [LICENSE](LICENSE) file). Key points:

**✅ You Are Free To:**
- Use, modify, and distribute code for personal and non-commercial purposes
- Study and learn from the code
- Fork and contribute improvements
- Use in educational settings and institutions

**❌ Restrictions:**
- Commercial use is NOT permitted without explicit written permission
- This includes: selling products, providing paid services, or using for profit-generating activities

**💼 Commercial Use:**
To request commercial use rights, contact: **ammari.ali.0001@gmail.com**

Include:
- Your name and organization
- Description of intended use
- Implementation timeline

### Project-Level Licenses

Individual projects may include their own `LICENSE` files:

- **snake-game/LICENSE:** Custom Commercial Use License
- **Tic-Tac-Toe-Game/LICENSE:** Custom Commercial Use License

These project-level licenses take precedence for their respective projects.

### Third-Party Dependencies

Each project may use third-party libraries, each with their own licenses:

**Snake Game:**
- TypeScript (Apache 2.0)
- @types/node (MIT)

**Tic-Tac-Toe:**
- Next.js (MIT)
- React (MIT)
- TypeScript (Apache 2.0)
- Tailwind CSS (MIT)
- Radix UI (MIT)
- Class Variance Authority (MIT)

Users are responsible for:
- Reviewing all third-party licenses
- Ensuring compliance with those licenses
- Obtaining separate commercial licenses for third-party components if required

---

## 🐛 Troubleshooting

### General Issues

**"Port already in use" error**
```bash
# Find and kill process using port 3000
# Windows PowerShell
Get-Process | Where-Object { $_.Port -eq 3000 } | Stop-Process

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**"Module not found" errors**
```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml  # or package-lock.json
pnpm install  # or npm install
```

### Snake Game Issues

**"Game doesn't start / blank screen"**
- Ensure you're serving over HTTP (not file://)
- Check browser console for errors (F12 → Console)
- Verify `build/index.html` exists and is valid
- Try: `npx http-server build -o`

**"Controls not responding"**
- Ensure focus is on the game canvas (click it)
- Check that JavaScript is enabled
- Verify arrow keys aren't blocked by browser extensions

**"TypeScript compilation errors"**
```bash
cd snake-game
node --version  # Should be v16+
npx tsc --version  # Check TypeScript version
npx tsc --project tsconfig.json  # Recompile
```

### Tic-Tac-Toe Game Issues

**"Dev server won't start"**
```bash
# Check dependencies are installed
pnpm install

# Clear Next.js cache
rm -rf .next

# Try again
pnpm dev
```

**"Hot reload not working"**
- Ensure you're using `pnpm dev` (not `pnpm build`)
- Check that file saving is working
- Restart dev server: Ctrl+C, then `pnpm dev`

**"ESLint/TypeScript errors"**
```bash
# Check errors
pnpm lint

# Fix auto-fixable errors
# (Configure your editor to auto-fix on save)
```

### Browser/Environment Issues

**"Keyboard shortcuts not working"**
- Ensure the game window has focus
- Check for keyboard layout issues
- Test with a different keyboard input method

**"Performance is slow"**
- Close other resource-intensive applications
- Reduce browser extensions running
- Try a different browser
- Clear browser cache: Ctrl+Shift+Delete

**"Game state not saving"**
- Score is not persisted (intentional for privacy)
- Refresh resets game (expected behavior)
- Use LocalStorage if persistence is needed (feature request)

---

## ❓ FAQ

**Q: Can I use this code commercially?**  
A: No, without explicit permission. Contact ammari.ali.0001@gmail.com with a commercial use request.

**Q: Which package manager should I use?**  
A: `pnpm` is recommended (what the author uses), but `npm` and `yarn` work too.

**Q: How can I deploy the Tic-Tac-Toe game?**  
A: Push to GitHub and connect to Vercel (auto-deploys). Or use any Next.js-compatible host.

**Q: Can I modify and redistribute these games?**  
A: Yes, for non-commercial use. Always credit the original author and follow the license.

**Q: How do I add new features?**  
A: Fork the repo, create a branch, make changes, test locally, and submit a PR. See [CONTRIBUTING.md](CONTRIBUTING.md).

**Q: Are there unit tests?**  
A: Not currently. Consider adding Jest/Vitest tests if making significant changes.

**Q: What if I found a bug?**  
A: Open a GitHub Issue with: what happened, steps to reproduce, and your environment (OS, browser, Node version).

**Q: Can I use these in a course or tutorial?**  
A: Yes! Educational use is explicitly allowed. Link back to the original repository.

**Q: How do I update dependencies?**  
A: Run `pnpm update` (or `npm update`). Check for breaking changes before updating major versions.

**Q: Why TypeScript instead of JavaScript?**  
A: For type safety, better IDE support, and catching errors early. Compiled to JavaScript automatically.

**Q: Can I create AI opponent for games?**  
A: Yes! That's a great feature addition. Implement it and submit a PR.

---

## 🙏 Credits & Acknowledgements

### Project Author
- **Ali Ammari** - Creator and Primary Maintainer
- **Contact:** ammari.ali.0001@gmail.com
- **GitHub:** [@aliammari1](https://github.com/aliammari1)

### Technologies & Libraries

**Snake Game:**
- TypeScript Team (Apache 2.0)
- Node.js Community
- HTML5 Canvas API (browser standard)

**Tic-Tac-Toe Game:**
- Vercel Team (Next.js - MIT)
- React Team (MIT)
- Tailwind Labs (Tailwind CSS - MIT)
- Radix UI Team (MIT)

### Community
- All contributors who've submitted PRs and issues
- Users who've tested and provided feedback
- Designers who've contributed UI/UX suggestions

### Special Thanks
- Inspiration from classic games and modern web development best practices
- Open-source community for tools, libraries, and guidance

---

## 📞 Support & Contact

### Getting Help

1. **Check the README** in the specific project folder
2. **Review Issues:** Search GitHub Issues for similar problems
3. **Read Troubleshooting:** See [Troubleshooting](#troubleshooting) section above
4. **Ask on Issues:** Open a new GitHub Issue with details

### Report a Bug
1. Go to GitHub Issues
2. Click "New Issue"
3. Title: Brief description of the problem
4. Description:
   - What happened?
   - Steps to reproduce
   - Expected behavior
   - Your environment (OS, browser, Node version)
   - Screenshots/GIFs if helpful

### Request a Feature
1. Open a GitHub Issue with "Feature Request" in title
2. Describe the desired feature
3. Explain the motivation/use case
4. Provide examples if helpful

### Direct Contact
- **Email:** ammari.ali.0001@gmail.com
- **Subject examples:**
  - "Snake Game Feature Request"
  - "Tic-Tac-Toe Bug Report"
  - "Commercial Use License Request"

---

## 🎯 Next Steps

### For First-Time Users
1. ✅ Clone the repository
2. ✅ Choose a game to explore
3. ✅ Follow the project's README
4. ✅ Play and enjoy!

### For Developers
1. ✅ Review the development guide above
2. ✅ Fork and create a branch
3. ✅ Make changes to a project
4. ✅ Test locally thoroughly
5. ✅ Submit a Pull Request

### For Contributors
1. ✅ Read [CONTRIBUTING.md](CONTRIBUTING.md)
2. ✅ Review [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
3. ✅ Check open Issues for opportunities
4. ✅ Fork, develop, test, submit PR

---

## 📊 Repository Stats

- **Projects:** 2 games
- **Primary Languages:** TypeScript, TSX (React)
- **License:** Custom Commercial Use License
- **Maintenance Status:** Active
- **Contributing:** Open to contributions

---

## 🚀 Future Roadmap

Potential future enhancements:

### Snake Game
- [ ] Difficulty levels and game modes
- [ ] Sound effects and background music
- [ ] Leaderboard/high scores (localStorage)
- [ ] Multiple game themes
- [ ] Mobile touch controls
- [ ] AI opponent option
- [ ] Power-ups and special items

### Tic-Tac-Toe Game
- [ ] AI opponent (minimax algorithm)
- [ ] Multiplayer online (WebSockets)
- [ ] Tournament/bracket system
- [ ] Statistics and analytics
- [ ] Custom board sizes (4×4, 5×5)
- [ ] Game history/replay
- [ ] Achievements/badges

### Repository
- [ ] Shared component library
- [ ] Unit test suite
- [ ] E2E tests (Playwright/Cypress)
- [ ] Documentation website
- [ ] CI/CD pipeline

---

## 📝 Version History

### Current Version
- **Snake Game:** v2.0.0
- **Tic-Tac-Toe Game:** v2.0.0
- **Repository:** 2024/2025

### Notable Updates
- Modern TypeScript implementation
- Next.js App Router
- Tailwind CSS redesign
- Responsive mobile support
- Accessibility improvements

---

Thank you for exploring this games collection! We hope you enjoy playing, learning, and contributing. Happy gaming! 🎮✨

For questions or support, reach out to **ammari.ali.0001@gmail.com**.
