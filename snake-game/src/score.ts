export default class Score {
  private _currentScore: number;
  private _highScore: number;
  private _score: HTMLElement | null;
  private _highScoreText: HTMLElement | null;
  public constructor(snakeLength: number = 1) {
    this._currentScore = snakeLength - 1;
    this._highScore = 0;
    this._score = document.getElementById("score");
    this._highScoreText = document.getElementById("highScore");
  }

  public updateScore(snakeLength: number): void {
    if (this._score !== null) {
      this._currentScore = snakeLength - 1;
      this._score.textContent = this._currentScore.toString().padStart(3, "0");
    }
  }

  public updateHighScore(): void {
    if (this._highScoreText !== null) {
      if (this._currentScore > this._highScore) {
        this._highScore = this._currentScore;
        this._highScoreText.textContent = this._highScore
          .toString()
          .padStart(3, "0");
      }
      this._highScoreText.style.display = "block";
    }
  }
}
