/**
 * Self-contained, dependency-free Tic-Tac-Toe AI.
 *
 * Provides:
 *  - `bestMove`  : an unbeatable minimax (with alpha-beta pruning) move chooser.
 *  - `randomMove`: a uniformly random legal move (Easy difficulty).
 *  - `chooseMove`: difficulty-aware dispatcher.
 *
 * The board is a flat 9-cell array indexed 0..8:
 *
 *   0 | 1 | 2
 *   3 | 4 | 5
 *   6 | 7 | 8
 *
 * Each cell is "X", "O", or "" (empty).
 */

export type Player = "X" | "O";
export type Cell = Player | "";
export type Board = Cell[];
export type Difficulty = "easy" | "hard";

export const WIN_LINES: readonly [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/** Returns the winning player if there is one, otherwise null. */
export function winner(board: Board): Player | null {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return board[a] as Player;
    }
  }
  return null;
}

/** True when every cell is filled. */
export function isFull(board: Board): boolean {
  return board.every((cell) => cell !== "");
}

/** True when the game is over (someone won or the board is full). */
export function isTerminal(board: Board): boolean {
  return winner(board) !== null || isFull(board);
}

/** Indices of all empty cells. */
export function availableMoves(board: Board): number[] {
  const moves: number[] = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      moves.push(i);
    }
  }
  return moves;
}

export function otherPlayer(player: Player): Player {
  return player === "X" ? "O" : "X";
}

/**
 * Minimax with alpha-beta pruning.
 *
 * `depth` is folded into the score so the AI prefers faster wins and slower
 * losses — this makes it play the most "human-punishing" line, not just a
 * non-losing one.
 *
 * @returns score from the perspective of `aiPlayer`
 *          (+ favourable, - unfavourable, 0 draw).
 */
export function minimax(
  board: Board,
  aiPlayer: Player,
  current: Player,
  depth: number,
  alpha: number,
  beta: number,
): number {
  const win = winner(board);
  if (win === aiPlayer) {
    return 10 - depth;
  }
  if (win === otherPlayer(aiPlayer)) {
    return depth - 10;
  }
  if (isFull(board)) {
    return 0;
  }

  const moves = availableMoves(board);

  if (current === aiPlayer) {
    let best = Number.NEGATIVE_INFINITY;
    let a = alpha;
    for (const move of moves) {
      board[move] = current;
      const score = minimax(board, aiPlayer, otherPlayer(current), depth + 1, a, beta);
      board[move] = "";
      best = Math.max(best, score);
      a = Math.max(a, score);
      if (beta <= a) {
        break; // beta cut-off
      }
    }
    return best;
  }

  let best = Number.POSITIVE_INFINITY;
  let b = beta;
  for (const move of moves) {
    board[move] = current;
    const score = minimax(board, aiPlayer, otherPlayer(current), depth + 1, alpha, b);
    board[move] = "";
    best = Math.min(best, score);
    b = Math.min(b, score);
    if (b <= alpha) {
      break; // alpha cut-off
    }
  }
  return best;
}

/**
 * Returns the index of the optimal move for `aiPlayer` on `board`.
 * Never loses: the chosen move maximises the minimax score.
 * Returns -1 if there are no legal moves.
 */
export function bestMove(board: Board, aiPlayer: Player): number {
  const moves = availableMoves(board);
  if (moves.length === 0) {
    return -1;
  }

  let chosen = moves[0];
  let bestScore = Number.NEGATIVE_INFINITY;

  for (const move of moves) {
    board[move] = aiPlayer;
    const score = minimax(
      board,
      aiPlayer,
      otherPlayer(aiPlayer),
      1,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY,
    );
    board[move] = "";
    if (score > bestScore) {
      bestScore = score;
      chosen = move;
    }
  }

  return chosen;
}

/** Returns a uniformly random legal move (Easy difficulty). Returns -1 if none. */
export function randomMove(board: Board, rng: () => number = Math.random): number {
  const moves = availableMoves(board);
  if (moves.length === 0) {
    return -1;
  }
  return moves[Math.floor(rng() * moves.length)];
}

/** Difficulty-aware move selection. */
export function chooseMove(
  board: Board,
  aiPlayer: Player,
  difficulty: Difficulty,
  rng: () => number = Math.random,
): number {
  return difficulty === "hard" ? bestMove(board, aiPlayer) : randomMove(board, rng);
}
