'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// let name = 0;
let scores, currentScore, activePlayer, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player1El.classList.remove('player--winner');
  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const randomRoll = Math.floor(Math.random() * 6) + 1;

const diceRoll = function () {
  if (playing) {
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    console.log(randomRoll);
    diceEl.src = `dice-${randomRoll}.png`;

    // 3. Check for rolled 1:
    if (randomRoll !== 1) {
      // Add dice to current score
      currentScore += randomRoll;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      // document.querySelector(`player--${activePlayer}`).style.backgroundColor =
      //   green;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
};

btnRoll.addEventListener('click', diceRoll);

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if player's score is >= 100

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

      document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
    } else {
      switchPlayer();
    }
    // Finish the game
    // Switch to the next player
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
