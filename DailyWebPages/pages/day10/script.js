// Get the DOM elements
const guessInput = document.getElementById('guessInput');
const submitGuessBtn = document.getElementById('submitGuessBtn');
const feedbackSpan = document.getElementById('feedback');
const attemptsSpan = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

// Variables for the game
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to handle guess submission
function submitGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedbackSpan.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsSpan.textContent = attempts;

    if (guess < secretNumber) {
        feedbackSpan.textContent = "Too low! Try again.";
    } else if (guess > secretNumber) {
        feedbackSpan.textContent = "Too high! Try again.";
    } else {
        feedbackSpan.textContent = "Congratulations! You guessed the number!";
        submitGuessBtn.disabled = true;
        resetBtn.style.display = "block";
    }
}

// Function to reset the game
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsSpan.textContent = attempts;
    guessInput.value = '';
    feedbackSpan.textContent = '';
    submitGuessBtn.disabled = false;
    resetBtn.style.display = "none";
}

// Event listeners
submitGuessBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', resetGame);
