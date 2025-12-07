# Classic Snake Game

This project is a modern implementation of the classic Snake Game using TypeScript. The game includes features such as a game board, a snake, food for the snake, and a scoring system. The game is built with object-oriented programming principles in mind, making the code modular and easy to maintain.

## Project Structure

- `src/board.ts`: This file contains the `Board` class which handles the game board, game state, and game logic. It includes methods for starting and stopping the game, handling key presses, checking for collisions, and drawing the game elements on the board.
- `src/food.ts`: This file contains the `Food` class which handles the creation and placement of food on the game board.
- `src/game.ts`: This file contains the main game logic, including the game loop and event listeners.
- `src/snake.ts`: This file contains the `Snake` class which handles the snake's behavior, including movement and growth.
- `src/score.ts`: This file contains the `Score` class which handles the game score, including updating and displaying the score.
- `src/style.css`: This file contains all the styles for the game.
- `src/index.html`: This is the main HTML file that displays the game.

## How to Play

1. Open `index.html` in your browser.
2. Press the spacebar to start the game.
3. Use the arrow keys to control the direction of the snake.
4. The game ends when the snake hits the game board edge or its own body.
5. The score is updated based on the length of the snake.

## Development

This project uses modern TypeScript features, including classes and private class fields. It is organized into modules for better code organization and maintainability.

## License

This project is licensed under the terms of the [MIT license](LICENSE).

## Contributing

Contributions are welcome! Please read the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.
