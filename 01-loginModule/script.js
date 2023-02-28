"use strict";

const userName = document.querySelector(".username").value;
const email = document.querySelector(".email").value;
const password = document.querySelector(".password").value;
const confirmPassword = document.querySelector(".password2").value;

document.querySelector("submit").addEventListener("onclick", function () {
  if (userName === "") {
    console.log("Invalid userName");
  }
});
