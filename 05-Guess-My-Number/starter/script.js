'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;

// const value = (document.querySelector('.guess').value = '14');

const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO Number';
    // console.log('Guess a real number');
    displayMessage('NO Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correcto');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      // score -= 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too high
  // else if (guess > secretNumber) {
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     // score -= 1;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   document.querySelector('.message').textContent =
  //     'You lost the game with so many attempts!';
  //   document.querySelector('.score').textContent = 0;
  // }
});
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing');

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '20';
});
