"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  type Board as BoardState,
  type Difficulty,
  bestMove,
  chooseMove,
  isFull,
  winner,
} from "@/lib/ai";
import { useCallback, useEffect, useState } from "react";

type Mode = "human" | "computer";

const emptyBoard = (): BoardState => new Array(9).fill("") as BoardState;

// The human is always "X"; the computer is always "O" and moves second.
const HUMAN = "X" as const;
const AI = "O" as const;

export default function Home() {
  const [board, setBoard] = useState<BoardState>(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [mode, setMode] = useState<Mode>("computer");
  const [difficulty, setDifficulty] = useState<Difficulty>("hard");
  const [isPlaying, setIsPlaying] = useState(false);
  const [locked, setLocked] = useState(false);
  const { toast } = useToast();

  const reset = useCallback(() => {
    setBoard(emptyBoard());
    setXIsNext(true);
    setLocked(false);
  }, []);

  const finish = useCallback(
    (message: string) => {
      toast({ description: message });
      setLocked(true);
    },
    [toast],
  );

  // Apply a move and detect end-of-game.
  const applyMove = useCallback(
    (index: number, current: "X" | "O", next: BoardState) => {
      const updated = [...next] as BoardState;
      updated[index] = current;
      setBoard(updated);

      const win = winner(updated);
      if (win) {
        finish(`${win} wins!`);
      } else if (isFull(updated)) {
        finish("It's a draw!");
      } else {
        setXIsNext(current !== "X");
      }
      return updated;
    },
    [finish],
  );

  const handleCellClick = (index: number) => {
    if (!isPlaying || locked || board[index] !== "") return;
    // In computer mode the human only plays "X" on their turn.
    if (mode === "computer" && !xIsNext) return;
    const current = xIsNext ? "X" : "O";
    applyMove(index, current, board);
  };

  // Computer's turn (only in "computer" mode, when it is O's move).
  useEffect(() => {
    if (mode !== "computer" || locked || !isPlaying || xIsNext) return;
    const id = setTimeout(() => {
      const move = difficulty === "hard" ? bestMove(board, AI) : chooseMove(board, AI, difficulty);
      if (move >= 0) {
        applyMove(move, AI, board);
      }
    }, 350);
    return () => clearTimeout(id);
  }, [board, xIsNext, mode, difficulty, locked, isPlaying, applyMove]);

  const turnLabel = (() => {
    if (locked) return "Game over";
    if (mode === "computer") return xIsNext ? "Your turn (X)" : "Computer is thinking…";
    return `Turn: ${xIsNext ? "X" : "O"}`;
  })();

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold tracking-tight">Tic-Tac-Toe</h1>

      {!isPlaying ? (
        <div className="flex w-full max-w-sm flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-muted-foreground">Mode</span>
            <div className="flex gap-2" aria-label="Game mode">
              <Button
                variant={mode === "computer" ? "default" : "outline"}
                onClick={() => setMode("computer")}
              >
                Play vs Computer
              </Button>
              <Button
                variant={mode === "human" ? "default" : "outline"}
                onClick={() => setMode("human")}
              >
                Two Players
              </Button>
            </div>
          </div>

          {mode === "computer" && (
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-muted-foreground">Difficulty</span>
              <div className="flex gap-2" aria-label="Difficulty">
                <Button
                  variant={difficulty === "easy" ? "default" : "outline"}
                  onClick={() => setDifficulty("easy")}
                >
                  Easy
                </Button>
                <Button
                  variant={difficulty === "hard" ? "default" : "outline"}
                  onClick={() => setDifficulty("hard")}
                >
                  Hard (unbeatable)
                </Button>
              </div>
            </div>
          )}

          <Button
            className="mt-2"
            onClick={() => {
              reset();
              setIsPlaying(true);
            }}
          >
            Start Game
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <p aria-live="polite" className="text-base font-medium">
            {turnLabel}
          </p>

          {/* biome-ignore lint/a11y/useSemanticElements: an interactive game board is a legitimate ARIA grid, not a data table */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2" role="grid" aria-label="Board">
            {board.map((value, index) => (
              <Card
                // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length 3x3 board, indices are stable
                // biome-ignore lint/a11y/useSemanticElements: cell of an ARIA game grid
                key={index}
                role="gridcell"
                aria-label={`Cell ${index + 1}${value ? `, ${value}` : ", empty"}`}
                data-cell={index}
                data-value={value}
                className="flex h-24 w-24 cursor-pointer select-none items-center justify-center border-2 sm:h-28 sm:w-28"
                onClick={() => handleCellClick(index)}
              >
                <span className="text-5xl font-bold">{value}</span>
              </Card>
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={reset}>
              Restart
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                reset();
                setIsPlaying(false);
              }}
            >
              Change Mode
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
