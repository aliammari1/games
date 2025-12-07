import Food from "./food.js";
import Score from "./score.js";
import Snake from "./snake.js";
export default class Board {
    get gridSize() {
        return this._gridSize;
    }
    constructor() {
        this._gridSize = 20;
        this.gameSpeedDelay = 200;
        this.gameBoard = document.getElementById("game-board");
        this.instructionText = document.getElementById("instruction-text");
        this.snake = new Snake();
        this.food = new Food(this);
        this.score = new Score();
        this.gameStarted = false;
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    draw() {
        if (this.gameBoard !== null) {
            this.gameBoard.innerHTML = "";
            if (this.gameStarted) {
                this.snake.drawSnake(this, this.gameBoard);
                this.food.drawFood(this, this.gameBoard);
            }
            this.score.updateScore(this.snake.snakeHead.length);
        }
    }
    createGameElement(tag, className) {
        const element = document.createElement(tag);
        element.className = className;
        return element;
    }
    setPosition(element, position) {
        element.style.gridColumn = position.x.toString();
        element.style.gridRow = position.y.toString();
    }
    startGame() {
        if (this.instructionText) {
            this.gameStarted = true;
            this.instructionText.style.display = "none";
            this.gameInterval = setInterval(() => {
                this.snake.move();
                this.checkFoodCollision();
                this.checkSnakeCollision();
                this.draw();
            }, this.gameSpeedDelay);
        }
    }
    handleKeyPress(event) {
        if (!this.gameStarted && event.key === " ") {
            this.startGame();
        }
        else {
            switch (event.key) {
                case "ArrowRight":
                    this.snake.direction = "right";
                    break;
                case "ArrowLeft":
                    this.snake.direction = "left";
                    break;
                case "ArrowUp":
                    this.snake.direction = "up";
                    break;
                case "ArrowDown":
                    this.snake.direction = "down";
                    break;
            }
        }
    }
    checkSnakeCollision() {
        const head = this.snake.snakeHead[0];
        if (head.x < 1 ||
            head.x > this._gridSize ||
            head.y < 1 ||
            head.y > this._gridSize) {
            this.resetGame();
        }
        for (let i = 1; i < this.snake.snakeHead.length; i++) {
            if (head.x === this.snake.snakeHead[i].x &&
                head.y === this.snake.snakeHead[i].y)
                this.resetGame();
        }
    }
    checkFoodCollision() {
        const head = Object.assign({}, this.snake.snakeHead[0]);
        if (head.x === this.food.x && head.y === this.food.y) {
            this.food = new Food(this);
            clearInterval(this.gameInterval);
            this.gameInterval = setInterval(() => {
                this.snake.move();
                this.checkFoodCollision();
                this.checkSnakeCollision();
                this.draw();
            }, this.gameSpeedDelay);
        }
        else {
            this.snake.snakeHead.pop();
        }
    }
    resetGame() {
        this.score.updateHighScore();
        this.stopGame();
        this.snake = new Snake();
        this.food = new Food(this);
        this.score.updateScore(this.snake.snakeHead.length);
    }
    stopGame() {
        if (this.instructionText !== null) {
            clearInterval(this.gameInterval);
            this.gameStarted = false;
            this.instructionText.style.display = "block";
        }
    }
}
