const randomNo = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Game settings
const min = 1;
const max = 10;
const correct = randomNo(min, max);
let attempts = 3;
let gameFinished = false;

// UI Elements
const minNum = document.getElementById("min-num");
const maxNum = document.getElementById("max-num");
const inputBtn = document.getElementById("input-btn");
const message = document.getElementById("message");
const guessInp = document.getElementById("input-num");

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for a guess
inputBtn.addEventListener("click", () => {
  if (gameFinished) return location.reload();

  const guess = Number(guessInp.value);

  // Validate
  if (isNaN(guess) || guess > max || guess < min) {
    return setMessage(`Please enter in between ${min} and ${max}`, "#d42e1c");
  }

  // Check if won
  if (guess === correct) {
    return gameOver(true, `${guess} is correct , YOU WON!!`);
  }

  // Check lose
  if (--attempts === 0) {
    return gameOver(false, `Game Over! YOU LOST!! ${correct} was the correct guess`);
  }

  setMessage(`Wrong guess! You have ${attempts} chances left`, "#d42e1c");
});

// Game over
function gameOver(won, msg) {
  const color = won ? "#28942d" : "#d42e1c";

  setMessage(msg, color);

  // Play again
  inputBtn.value = "Play again";
  inputBtn.className += " warning";
  gameFinished = true;
}

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
