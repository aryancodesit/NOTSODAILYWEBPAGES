const easyText = "The quick brown fox jumps over the lazy dog.";
const mediumText = "A journey of a thousand miles begins with a single step.";
const hardText = "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.";

let timer;
let timeLeft = 60;
let isTestRunning = false;

const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const startButton = document.getElementById('startButton');
const submitButton = document.getElementById('submitButton'); // Reference to the Submit button
const timerDisplay = document.getElementById('timer');
const resultDisplay = document.getElementById('result');
const difficultySelect = document.getElementById('difficulty');

startButton.addEventListener('click', startTest);
submitButton.addEventListener('click', calculateResult); // Add event listener for Submit button

function startTest() {
    const difficulty = difficultySelect.value;
    let textToType;

    switch (difficulty) {
        case 'easy':
            textToType = easyText;
            break;
        case 'medium':
            textToType = mediumText;
            break;
        case 'hard':
            textToType = hardText;
            break;
    }

    textDisplay.textContent = textToType;
    textInput.value = '';
    textInput.disabled = false;
    textInput.focus();
    resultDisplay.textContent = '';
    timeLeft = 60;
    isTestRunning = true;
    submitButton.disabled = false; // Enable the Submit button
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
    } else {
        clearInterval(timer);
        isTestRunning = false;
        textInput.disabled = true;
        submitButton.disabled = false; // Enable the Submit button when time is up
        calculateResult();
    }
}

textInput.addEventListener('input', () => {
    if (isTestRunning) {
        const typedText = textInput.value;
        const originalText = textDisplay.textContent;

        if (typedText === originalText) {
            clearInterval(timer);
            isTestRunning = false;
            resultDisplay.textContent = "Congratulations! You've completed the test.";
            textInput.disabled = true;
            submitButton.disabled = false; // Enable the Submit button when finished
        }
    }
});

function calculateResult() {
    const typedText = textInput.value;
    const originalText = textDisplay.textContent;
    const correctWords = typedText.split(' ').filter((word, index) => word === originalText.split(' ')[index]).length;
    const wpm = (correctWords / 5) * (60 / (60 - timeLeft)); // Words per minute calculation
    resultDisplay.textContent = `Your typing speed: ${Math.round(wpm)} WPM`;
    submitButton.disabled = true; // Disable the Submit button after calculation
}