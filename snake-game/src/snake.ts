import Board from "./board";

export default class Snake {
  private _initPosX: number;
  private _initPosY: number;
  private _snakeHead: Array<{ x: number; y: number }>;
  private _direction: string;
  public constructor() {
    this._initPosX = 10;
    this._initPosY = 10;
    this._snakeHead = new Array();
    this._snakeHead.push({ x: this._initPosX, y: this._initPosY });
    this._direction = "right";
  }

  public get snakeHead() {
    return this._snakeHead;
  }

  public set snakeHead(value) {
    this._snakeHead = value;
  }

  public get direction() {
    return this._direction;
  }

  public set direction(value) {
    this._direction = value;
  }

  public drawSnake(board: Board, gameBoard: HTMLElement) {
    this._snakeHead.forEach((segment) => {
      const snakeElement: HTMLElement = board.createGameElement("div", "snake");
      board.setPosition(snakeElement, segment);
      gameBoard.appendChild(snakeElement);
    });
  }
  public move() {
    const head: { x: number; y: number } = { ...this._snakeHead[0] };
    switch (this.direction) {
      case "right":
        head.x++;
        break;
      case "left":
        head.x--;
        break;
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
    }
    this._snakeHead.unshift(head);
  }
}
