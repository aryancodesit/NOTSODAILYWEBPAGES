const buttons = document.querySelectorAll('.btn');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');

let sequence = [];
let playerSequence = [];
let score = 0;
let gameStarted = false;

// Colors for each button
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'white'];

// Event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (gameStarted) {
            const color = button.id;
            playerSequence.push(color);
            playSound(color);
            animateButton(color);
            checkPlayerSequence();
        }
    });
});

// Start the game
startBtn.addEventListener('click', startGame);

// Function to start a new game
function startGame() {
    score = 0;
    sequence = [];
    playerSequence = [];
    gameStarted = true;
    scoreDisplay.textContent = `Score: ${score}`;
    nextSequence();
}

// Function to generate the next sequence
function nextSequence() {
    playerSequence = [];
    const randomColor = colors[Math.floor(Math.random() * 9)];
    sequence.push(randomColor);
    playSequence();
}

// Function to play the generated sequence
function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        playSound(sequence[i]);
        animateButton(sequence[i]);
        i++;
        if (i === sequence.length) {
            clearInterval(interval);
        }
    }, 600);
}

// Function to play sound based on the color
function playSound(color) {
    const audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

// Function to animate the button
function animateButton(color) {
    const button = document.getElementById(color);
    button.style.opacity = '1';
    setTimeout(() => {
        button.style.opacity = '0.8';
    }, 300);
}

// Function to check the player's sequence
function checkPlayerSequence() {
    const lastIndex = playerSequence.length - 1;
    if (playerSequence[lastIndex] !== sequence[lastIndex]) {
        gameOver();
    } else if (playerSequence.length === sequence.length) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }
}

// Function to end the game
function gameOver() {
    alert(`Game Over! Your final score is ${score}`);
    gameStarted = false;
    score = 0;
    scoreDisplay.textContent = `Score: 0`;
    sequence = [];
    playerSequence = [];
}
