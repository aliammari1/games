import Board from "./board.js";
const game = new Board();
document.addEventListener("keydown", game.handleKeyPress);
