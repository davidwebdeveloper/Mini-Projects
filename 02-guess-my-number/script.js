// "use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".guess-input").value = 23;
// console.log(document.querySelector(".guess-input").value);

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".box").textContent = number;
let score = 20;
let highscore = Number(document.querySelector(".high").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);

  // when no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";

    // When guess is equal to secretNumber
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎇 Correct Number";
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
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 Game is lost";
      document.querySelector(".score").textContent = score - 1;
    }

    // When guessing number is less than secret number
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low";
      score--;
      document.querySelector(".score").textContent = score;

      // When we use all the chances
    } else {
      document.querySelector(".message").textContent = "😭 Game is lost";
      document.querySelector(".score").textContent = score - 1;
    }
  }
});

// Again Event

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing ....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".box").textContent = "?";
  document.querySelector(".guess-input").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".box").style.width = "9.6rem";
});
