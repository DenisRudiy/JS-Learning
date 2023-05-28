'use strict';

/*
conole.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 1;
console.log(document.querySelector('.guess').value);
*/

// init variables
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessBlock = document.querySelector('.guess');
const messageBlock = document.querySelector('.message');
const scoreBlock = document.querySelector('.score');
const highscoreBlock = document.querySelector('.highscore');
const bodyBlock = document.querySelector('body');
const numberBlock = document.querySelector('.number');

// init functions
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessBlock.value);

  if (!guess) {
    messageBlock.textContent = '⛔ Please Enter a Number!';
  } else if (score == 0) {
    messageBlock.textContent = '💥 You are loosing the Game!';
  } else if (guess > 20 || guess < 1) {
    messageBlock.textContent = '😒 Type Numbers between 1 and 20!';
  } else {
    if (guess === number) {
      messageBlock.textContent = '🎉Correct Number!';
      numberBlock.textContent = number;
      bodyBlock.style.backgroundColor = '#60b347';
      numberBlock.style.width = '30rem';

      if (highscore < score) {
        highscore = score;
        highscoreBlock.textContent = highscore;
      }
    } else if (guess !== number) {
      if (score > 1) {
        if (guess > number) {
          messageBlock.textContent = '📈 Too High!';
          score--;
          scoreBlock.textContent = score;
        } else {
          messageBlock.textContent = '📉 Too Low!';
          score--;
          scoreBlock.textContent = score;
        }
      } else {
        messageBlock.textContent = '💥 You are loosing the Game!';
        score = 0;
        scoreBlock.textContent = score;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  bodyBlock.style.backgroundColor = '#222';
  numberBlock.style.width = '15rem';
  number = Math.trunc(Math.random() * 20) + 1;
  numberBlock.textContent = '?';
  guessBlock.value = '';
  messageBlock.textContent = 'Start guessing...';

  score = 20;
  scoreBlock.textContent = score;
});
