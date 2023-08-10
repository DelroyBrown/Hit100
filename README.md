# Hit100 Game

## Description:
Hit100 is a simple two-player dice game where the goal is to be the first player to reach a score of 100 or more. Players take turns rolling a dice, and they can choose to "hold" their current round's score at any point, adding it to their total score. If a player rolls a 1, they lose their round score, and it's the other player's turn. Strategy and luck combine in this game to make it both fun and unpredictable!

## How to Play:

1. **Starting the Game**: The game begins automatically with Player 1's turn. The dice is hidden initially.
2. **Rolling the Dice**: Click on the "Roll Dice" button. The result of the dice roll will appear and your current round score will adjust according to the dice value.
   - If you roll a `1`, you lose your current round score, a sound effect plays, and the turn switches to the other player.
   - If you roll any other number, it gets added to your current round score.
3. **Holding the Score**: If you want to keep your current round score, press the "Hold" button. Your current round score will then be added to your total score.
   - Another sound effect plays to signify the switching of players.
   - If your total score reaches 100 or more after holding, you are declared the winner and the game stops.
4. **Starting a New Game**: Click on the "New Game" button to reset the game and start from scratch.

## Game Interface:

- **Player Panels**: The game has two panels to represent each player. The active player's panel has a distinct highlight.
- **Score Display**: Each player's total score is displayed prominently on their respective panels.
- **Current Score**: Below the main score, the current round score for the active player is shown.
- **Dice Image**: In the middle, the dice image is shown representing the last dice roll.
- **Buttons**:
  - `Roll Dice`: Click to roll the dice.
  - `Hold`: Click to hold/save the current round score to the total score.
  - `New Game`: Click to reset and start a new game.
  
## Game Sounds:
The game features some sound effects to enhance the user experience:
- Rolling a `1` plays a distinct sound.
- Switching players after holding the score also triggers a sound effect.

## Game Rules:

1. The active player rolls the dice.
2. If they roll a `1`, they lose their round score and it's the other player's turn.
3. If they roll any other number, they can either roll again or decide to "hold", which means their round score gets added to their total score.
4. The first player to reach a score of 100 or more wins!

## Technical Details:
The game is built using vanilla JavaScript. It maintains an internal state to keep track of scores, active players, and game status. The code has been structured to separate concerns and make it maintainable and easy to understand.

## Contribution:
Feel free to report bugs, request features, or create pull requests. Any contribution is highly appreciated!

---

Enjoy the game and may the best player win!