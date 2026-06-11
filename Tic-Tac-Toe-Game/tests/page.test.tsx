import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../app/page";

// next-themes / toast hooks need no special mocking under jsdom, but we silence
// the toast portal by relying on its default no-op render in tests.

describe("Tic-Tac-Toe page", () => {
  it("renders the mode selector on load", () => {
    render(<Home />);
    expect(screen.getByText("Play vs Computer")).toBeInTheDocument();
    expect(screen.getByText("Two Players")).toBeInTheDocument();
  });

  it("shows the difficulty selector in computer mode and starts the game", () => {
    render(<Home />);
    expect(screen.getByText("Hard (unbeatable)")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Start Game"));
    expect(screen.getByLabelText("Board")).toBeInTheDocument();
  });

  it("lets the human place an X and the computer responds with an O", async () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Start Game"));

    const board = screen.getByLabelText("Board");
    const cells = board.querySelectorAll("[data-cell]");
    fireEvent.click(cells[0]); // human plays X at index 0

    expect(cells[0].getAttribute("data-value")).toBe("X");

    // The computer plays after a short "thinking" delay.
    await waitFor(
      () => {
        const oCells = Array.from(board.querySelectorAll('[data-value="O"]'));
        expect(oCells.length).toBe(1);
      },
      { timeout: 2000 },
    );
  });

  it("supports two-player mode (X then O, no computer move)", async () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Two Players"));
    fireEvent.click(screen.getByText("Start Game"));

    const board = screen.getByLabelText("Board");
    const cells = board.querySelectorAll("[data-cell]");
    fireEvent.click(cells[0]);
    expect(cells[0].getAttribute("data-value")).toBe("X");

    // The human places O on the next click (no automatic computer move).
    fireEvent.click(cells[1]);
    expect(cells[1].getAttribute("data-value")).toBe("O");

    const filled = Array.from(cells).filter((c) => c.getAttribute("data-value") !== "");
    expect(filled.length).toBe(2);
  });
});
