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
        this._snakeHead.forEach((segment) => {
            const snakeElement = board.createGameElement("div", "snake");
            board.setPosition(snakeElement, segment);
            gameBoard.appendChild(snakeElement);
        });
    }
    move() {
        const head = Object.assign({}, this._snakeHead[0]);
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
