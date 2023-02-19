"use strict";

const hiddenBox = document.querySelector(".hidden-box");
const overlay = document.querySelector(".display-overlay");
const closeModel = document.querySelector(".close-model");
const showModels = document.querySelectorAll(".show-model");

const openModel = function () {
  hiddenBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const collapseModel = function () {
  hiddenBox.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModels.length; i++) {
  console.log(showModels[i].addEventListener("click", openModel));
}

closeModel.addEventListener("click", collapseModel);
overlay.addEventListener("click", collapseModel);
