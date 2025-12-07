import Board from "./board.js";

const game: Board = new Board();

document.addEventListener("keydown", game.handleKeyPress);
