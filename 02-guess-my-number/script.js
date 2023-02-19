"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector(".high").textContent);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);

  // when no input
  if (!guess) {
    displayMessage("⛔ No Number");

    // When guess is equal to secretNumber
  } else if (guess === number) {
    displayMessage("🎇 Correct Number");
    document.querySelector(".box").textContent = guess;

    // Implementing styles
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".box").style.width = "18rem";

    // Implementing the highscore logic
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high").textContent = highscore;
    } else {
      doucument.querySelector(".high").textContent = highscore;
    }

    // when geussing number is greater then secret number
  }

  // When Guessing is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈 Too high" : "📉 Too low");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭 Game is lost");
      document.querySelector(".score").textContent = score - 1;
    }
  }
});

// Again Event

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing ....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".box").textContent = "?";
  document.querySelector(".guess-input").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".box").style.width = "9.6rem";
});
