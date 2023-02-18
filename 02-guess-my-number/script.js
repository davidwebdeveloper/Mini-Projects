// "use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".guess-input").value = 23;
// console.log(document.querySelector(".guess-input").value);

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".box").textContent = number;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);
  console.log(score);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎇 Correct Number";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 Game is lost";
      document.querySelector(".score").textContent = score - 1;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 Game is lost";
      document.querySelector(".score").textContent = score - 1;
    }
  }
});
