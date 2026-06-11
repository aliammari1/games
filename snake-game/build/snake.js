import { nextHead } from "./logic.js";
export default class Snake {
    constructor() {
        this._initPosX = 10;
        this._initPosY = 10;
        this._snakeHead = new Array();
        this._snakeHead.push({ x: this._initPosX, y: this._initPosY });
        this._direction = "right";
    }
    get snakeHead() {
        return this._snakeHead;
    }
    set snakeHead(value) {
        this._snakeHead = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    drawSnake(board, gameBoard) {
        for (const segment of this._snakeHead) {
            const snakeElement = board.createGameElement("div", "snake");
            board.setPosition(snakeElement, segment);
            gameBoard.appendChild(snakeElement);
        }
    }
    move() {
        const head = nextHead(this._snakeHead[0], this._direction);
        this._snakeHead.unshift(head);
    }
}
