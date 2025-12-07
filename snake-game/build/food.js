export default class Food {
    constructor(board) {
        this._x = Math.floor(Math.random() * board.gridSize) + 1;
        this._y = Math.floor(Math.random() * board.gridSize) + 1;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
    drawFood(board, gameBoard) {
        const foodElement = board.createGameElement("div", "food");
        board.setPosition(foodElement, { x: this._x, y: this._y });
        gameBoard.appendChild(foodElement);
    }
}
