import Food from "./food.js";
import Score from "./score.js";
import Snake from "./snake.js";

export default class Board {
  private _gridSize: number;
  private gameSpeedDelay: number;
  private gameBoard: HTMLElement | null;
  private instructionText: HTMLElement | null;
  private gameInterval: number | undefined;
  private gameStarted: boolean;
  private snake: Snake;
  private food: Food;
  private score: Score;

  public get gridSize(): number {
    return this._gridSize;
  }
  public constructor() {
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

  private draw() {
    if (this.gameBoard !== null) {
      this.gameBoard.innerHTML = "";
      if (this.gameStarted) {
        this.snake.drawSnake(this, this.gameBoard);
        this.food.drawFood(this, this.gameBoard);
      }
      this.score.updateScore(this.snake.snakeHead.length);
    }
  }

  public createGameElement(tag: string, className: string): HTMLElement {
    const element: HTMLElement = document.createElement(tag);
    element.className = className;
    return element;
  }

  public setPosition(
    element: HTMLElement,
    position: { x: number; y: number }
  ): void {
    element.style.gridColumn = position.x.toString();
    element.style.gridRow = position.y.toString();
  }

  private startGame(): void {
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

  public handleKeyPress(event: KeyboardEvent): void {
    if (!this.gameStarted && event.key === " ") {
      this.startGame();
    } else {
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

  private checkSnakeCollision(): void {
    const head: { x: number; y: number } = this.snake.snakeHead[0];
    if (
      head.x < 1 ||
      head.x > this._gridSize ||
      head.y < 1 ||
      head.y > this._gridSize
    ) {
      this.resetGame();
    }

    for (let i = 1; i < this.snake.snakeHead.length; i++) {
      if (
        head.x === this.snake.snakeHead[i].x &&
        head.y === this.snake.snakeHead[i].y
      )
        this.resetGame();
    }
  }

  private checkFoodCollision(): void {
    const head: { x: number; y: number } = { ...this.snake.snakeHead[0] };
    if (head.x === this.food.x && head.y === this.food.y) {
      this.food = new Food(this);
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(() => {
        this.snake.move();
        this.checkFoodCollision();
        this.checkSnakeCollision();
        this.draw();
      }, this.gameSpeedDelay);
    } else {
      this.snake.snakeHead.pop();
    }
  }

  private resetGame(): void {
    this.score.updateHighScore();
    this.stopGame();
    this.snake = new Snake();
    this.food = new Food(this);
    this.score.updateScore(this.snake.snakeHead.length);
  }

  private stopGame(): void {
    if (this.instructionText !== null) {
      clearInterval(this.gameInterval);
      this.gameStarted = false;
      this.instructionText.style.display = "block";
    }
  }
}
