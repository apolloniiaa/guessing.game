'use strict';

const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 21);
const restore = document.querySelector('.again');

let score = 3;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number found 😏');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor =
      'rgb(29 36 20 / 83%)';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'to low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

restore.addEventListener('click', function () {
  score = 3;
  displayScore(score);

  secretNumber = Math.trunc(Math.random() * 21);

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(13, 3, 33)';
});
