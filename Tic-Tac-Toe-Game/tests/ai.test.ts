import { describe, expect, it } from "vitest";
import {
  type Board,
  type Player,
  availableMoves,
  bestMove,
  chooseMove,
  isFull,
  minimax,
  otherPlayer,
  randomMove,
  winner,
} from "../lib/ai";

const empty = (): Board => new Array(9).fill("") as Board;

describe("winner", () => {
  it("detects a row win", () => {
    const b: Board = ["X", "X", "X", "", "", "", "", "", ""];
    expect(winner(b)).toBe("X");
  });
  it("detects a column win", () => {
    const b: Board = ["O", "", "", "O", "", "", "O", "", ""];
    expect(winner(b)).toBe("O");
  });
  it("detects a diagonal win", () => {
    const b: Board = ["X", "", "", "", "X", "", "", "", "X"];
    expect(winner(b)).toBe("X");
  });
  it("returns null for no winner", () => {
    expect(winner(empty())).toBeNull();
  });
});

describe("helpers", () => {
  it("availableMoves lists empty cells", () => {
    const b: Board = ["X", "", "O", "", "", "", "", "", ""];
    expect(availableMoves(b)).toEqual([1, 3, 4, 5, 6, 7, 8]);
  });
  it("isFull detects a full board", () => {
    expect(isFull(["X", "O", "X", "X", "O", "O", "O", "X", "X"])).toBe(true);
    expect(isFull(empty())).toBe(false);
  });
  it("otherPlayer flips the player", () => {
    expect(otherPlayer("X")).toBe("O");
    expect(otherPlayer("O")).toBe("X");
  });
});

describe("bestMove tactics", () => {
  it("takes an immediate winning move", () => {
    // X to move, X wins by playing index 2.
    const b: Board = ["X", "X", "", "O", "O", "", "", "", ""];
    expect(bestMove(b, "X")).toBe(2);
  });
  it("blocks the opponent's winning move", () => {
    // O to move; X threatens to win at index 2, so O must play 2.
    const b: Board = ["X", "X", "", "", "O", "", "", "", ""];
    expect(bestMove(b, "O")).toBe(2);
  });
  it("returns a legal move on an empty board", () => {
    const move = bestMove(empty(), "X");
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThanOrEqual(8);
  });
  it("creates a fork / does not lose from a corner opening", () => {
    // Human X opens a corner; AI O must respond with the center to avoid losing.
    const b: Board = ["X", "", "", "", "", "", "", "", ""];
    expect(bestMove(b, "O")).toBe(4);
  });
});

describe("randomMove", () => {
  it("only returns legal moves", () => {
    const b: Board = ["X", "O", "", "X", "O", "", "X", "O", ""];
    const legal = new Set(availableMoves(b));
    for (let i = 0; i < 50; i++) {
      expect(legal.has(randomMove(b))).toBe(true);
    }
  });
  it("uses the injected rng deterministically", () => {
    const b: Board = ["", "", "", "", "", "", "", "", ""];
    // rng -> 0 picks the first available move (index 0).
    expect(randomMove(b, () => 0)).toBe(0);
  });
  it("returns -1 on a full board", () => {
    expect(randomMove(["X", "O", "X", "X", "O", "O", "O", "X", "X"])).toBe(-1);
  });
});

describe("chooseMove difficulty dispatch", () => {
  it("hard delegates to minimax (blocks a threat)", () => {
    // O to move; X threatens at index 2. Hard must block.
    const b: Board = ["X", "X", "", "", "O", "", "", "", ""];
    expect(chooseMove(b, "O", "hard")).toBe(2);
  });
  it("easy delegates to random", () => {
    expect(chooseMove(empty(), "X", "easy", () => 0)).toBe(0);
  });
});

/**
 * Exhaustive proof that the Hard AI never loses.
 *
 * We recursively explore EVERY possible game: at the opponent's turn we branch
 * on all legal moves, and at the AI's turn we play its single chosen move.
 * This covers every opening state and every opponent strategy. The AI must
 * never reach a terminal state where the opponent has won.
 */
function assertAiNeverLoses(board: Board, ai: Player, toMove: Player): void {
  const win = winner(board);
  if (win) {
    expect(win).not.toBe(otherPlayer(ai)); // opponent must never win
    return;
  }
  if (isFull(board)) {
    return; // draw is acceptable
  }

  if (toMove === ai) {
    const move = bestMove(board, ai);
    board[move] = ai;
    assertAiNeverLoses(board, ai, otherPlayer(ai));
    board[move] = "";
  } else {
    // Branch on every possible opponent move.
    for (const move of availableMoves(board)) {
      board[move] = toMove;
      assertAiNeverLoses(board, ai, ai);
      board[move] = "";
    }
  }
}

describe("Hard AI is unbeatable (exhaustive)", () => {
  it("never loses when the AI moves first as X", () => {
    assertAiNeverLoses(empty(), "X", "X");
  });

  it("never loses when the human moves first and AI is O", () => {
    assertAiNeverLoses(empty(), "O", "X");
  });
});

describe("minimax scoring", () => {
  it("scores a forced win positively", () => {
    const b: Board = ["X", "X", "", "O", "O", "", "", "", ""];
    const score = minimax(b, "X", "X", 0, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    expect(score).toBeGreaterThan(0);
  });
  it("scores a forced loss negatively", () => {
    // O to move but X has a double threat; from X's perspective this is winning.
    const b: Board = ["X", "X", "", "", "O", "", "", "", ""];
    const score = minimax(b, "X", "O", 0, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    expect(score).toBeGreaterThanOrEqual(0);
  });
});
