"use strict";

// Selecting the element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const holdScore = document.querySelector(".btn--hold");
const currentScoreEl0 = document.querySelector("#current--0");
const currentScoreEl1 = document.querySelector("#current--1");

// variable Decleration

let score;
let currentScore;
let playerActive;
let playing;

// Reset Function
const init = function () {
  score = [0, 0];
  currentScore = 0;
  playerActive = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player-winner");
};

// Intial Reset

init();

// Switch Player Function

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${playerActive}`).textContent =
    currentScore;
  playerActive = playerActive === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Starting State
// scoreEl0.textContent = 0;
// scoreEl1.textContent = 0;
// diceEl.classList.add('hidden');

// Roling the Dice

rollDice.addEventListener("click", function () {
  if (playing) {
    // Generating the random number for dice rolling
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      // Added to current Score
      currentScore = currentScore + diceNumber;
      document.getElementById(`current--${playerActive}`).textContent =
        currentScore;
    } else {
      // Switch the player
      switchPlayer();
    }
  }
});

// Hold

holdScore.addEventListener("click", function () {
  if (playing) {
    // if (playerActive === 0) {
    //   scoreEl0.textContent = currentScore;
    // } else {
    //   scoreEl1.textContent = currentScore;
    // }

    // console.log(scoreEl0.textContent);
    // console.log(currentScore);

    // 1. Ad the current score to Total  Score
    score[playerActive] = score[playerActive] + currentScore;
    document.getElementById(`score--${playerActive}`).textContent =
      score[playerActive];

    // 2. Switch the current Player

    console.log(playerActive);

    // 3. score >=100 player wins
    if (score[playerActive] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener("click", function () {
  // playing = true;

  // document
  //   .querySelector(`.player--${playerActive}`)
  //   .classList.remove('player--winner');
  // document.querySelector(`.player--0`).classList.add('player--active');
  // score = [0, 0];
  // currentScore = 0;
  // scoreEl0.textContent = score[0];
  // scoreEl1.text = score[1];
  // currentScoreEl0.textContent = currentScore;
  // currentScoreEl1.textContent = currentScore;
  init();
});
