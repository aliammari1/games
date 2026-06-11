import type Board from "./board";
import { type Direction, nextHead } from "./logic.js";

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
    for (const segment of this._snakeHead) {
      const snakeElement: HTMLElement = board.createGameElement("div", "snake");
      board.setPosition(snakeElement, segment);
      gameBoard.appendChild(snakeElement);
    }
  }
  public move() {
    const head = nextHead(this._snakeHead[0], this._direction as Direction);
    this._snakeHead.unshift(head);
  }
}
