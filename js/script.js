'use strict';

// We are grouping our DOM elements into an object for easier access.
const elements = {
  // Here we are selecting player elements
  players: [
    document.querySelector('.player--0'),
    document.querySelector('.player--1'),
  ],
  // Selecting score elements of both players
  scores: [
    document.querySelector('#score--0'),
    document.querySelector('#score--1'),
  ],
  // Selecting current score elements of both players
  currentScores: [
    document.querySelector('#current--0'),
    document.querySelector('#current--1'),
  ],
  // Selecting the dice element
  dice: document.querySelector('.dice'),
  // Selecting the 'New Game' button
  newButton: document.querySelector('.btn--new'),
  // Selecting the 'Roll Dice' button
  rollButton: document.querySelector('.btn--roll'),
  // Selecting the 'Hold' button
  holdButton: document.querySelector('.btn--hold'),
};

// Initialize the state of our game in an object
let state = {
  scores: [0, 0], // Starting scores for both players
  currentScore: 0, // Starting current score
  activePlayer: 0, // Set the active player (0 is the first player, 1 is the second player)
  playing: true, // Set the state of the game to true, as the game is active at the start
};

// A function to initialize our game to its starting conditions
function init() {
  // Reset the scores, current score, active player and the playing state
  state.scores = [0, 0];
  state.currentScore = 0;
  state.activePlayer = 0;
  state.playing = true;

  // Reset the textContent of the score and current score elements for both players
  elements.scores.forEach(el => (el.textContent = 0));
  elements.currentScores.forEach(el => (el.textContent = 0));

  // Hide the dice at the start of the game
  elements.dice.classList.add('hidden');
  // Remove the 'player--winner' class from both players and set the 'player--active' class to the active player
  elements.players.forEach((player, i) => {
    player.classList.remove('player--winner');
    player.classList.toggle('player--active', i === state.activePlayer);
  });
}

// Function to switch the active player
function switchPlayer() {
  // Reset the current score of the active player to 0 and update the current score element
  elements.currentScores[state.activePlayer].textContent = 0;
  state.currentScore = 0;
  // Switch the active player (0 becomes 1, 1 becomes 0)
  state.activePlayer = state.activePlayer === 0 ? 1 : 0;
  // Toggle the 'player--active' class on the player elements
  elements.players.forEach((player, i) => {
    player.classList.toggle('player--active', i === state.activePlayer);
  });
  if (dice !== 1) {
    const playerSwitchSFX = document.getElementById('playerSwitchSFX');
    playerSwitchSFX.play();
  } else {
    const diceRoll1SFX = document.getElementById('diceRoll1SFX');
    diceRoll1SFX.play();
  }
}

// Event listener for the 'Roll Dice' button
elements.rollButton.addEventListener('click', function () {
  if (state.playing) {
    // Only perform action if the game is active
    // Generate a random number between 1 and 6 for the dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Show the dice and set the correct image for the dice roll
    elements.dice.classList.remove('hidden');
    elements.dice.src = `images/dice-${dice}.png`;

    // If the dice roll was not 1, add the dice roll to the current score and update the current score element
    if (dice !== 1) {
      // If dice roll isn't 1, add dice value to current score
      state.currentScore += dice;
      // Update current score for active player on the UI
      elements.currentScores[state.activePlayer].textContent =
        state.currentScore;
    } else {
      // If dice roll is 1, play the diceRoll1SFX sound
      const diceRoll1SFX = document.getElementById('diceRoll1SFX');
      diceRoll1SFX.play();

      // Switch to the next player
      switchPlayer();
    }
  }
});

// Event listener for the 'Hold' button
elements.holdButton.addEventListener('click', function () {
  if (state.playing) {
    // Only perform action if the game is active
    // Add the current score to the total score of the active player
    state.scores[state.activePlayer] += state.currentScore;
    // Update the score for the active player on the UI
    elements.scores[state.activePlayer].textContent =
      state.scores[state.activePlayer];
    const playerSwitchSFX = document.getElementById('playerSwitchSFX');
    playerSwitchSFX.play();

    // Check if player's score is 100 or more. If so, end the game
    if (state.scores[state.activePlayer] >= 100) {
      // Set playing to false to indicate game is over
      state.playing = false;
      // Hide the dice as the game is over
      elements.dice.classList.add('hidden');
      // Add the winner class to the winning player
      elements.players[state.activePlayer].classList.add('player--winner');
      // Remove the active player class from the winning player
      elements.players[state.activePlayer].classList.remove('player--active');
    } else {
      // If player's score is less than 100, switch to the other player
      switchPlayer();
    }
  }
});

// Event listener for the 'New Game' button. When clicked, initialize the game.
elements.newButton.addEventListener('click', init);

// Call init function to start the game
init();
