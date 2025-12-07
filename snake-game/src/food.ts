import Board from "./board";

export default class Food {
  private _x: number;
  private _y: number;
  public constructor(board: Board) {
    this._x = Math.floor(Math.random() * board.gridSize) + 1;
    this._y = Math.floor(Math.random() * board.gridSize) + 1;
  }

  public get x() {
    return this._x;
  }
  public get y() {
    return this._y;
  }
  public set x(value) {
    this._x = value;
  }
  public set y(value) {
    this._y = value;
  }
  public drawFood(board: Board, gameBoard: HTMLElement): void {
    const foodElement: HTMLElement = board.createGameElement("div", "food");
    board.setPosition(foodElement, { x: this._x, y: this._y });
    gameBoard.appendChild(foodElement);
  }
}
