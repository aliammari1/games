export default class Score {
    constructor(snakeLength = 1) {
        this._currentScore = snakeLength - 1;
        this._highScore = 0;
        this._score = document.getElementById("score");
        this._highScoreText = document.getElementById("highScore");
    }
    updateScore(snakeLength) {
        if (this._score !== null) {
            this._currentScore = snakeLength - 1;
            this._score.textContent = this._currentScore.toString().padStart(3, "0");
        }
    }
    updateHighScore() {
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
