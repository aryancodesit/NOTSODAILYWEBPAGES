const words = ["code", "javascript", "html", "css", "web", "game", "search"];
const gridSize = 10;
let selectedCells = [];
let foundWords = [];
let timer = 90;

// Generate the word search grid
function createGrid() {
    const gridContainer = document.getElementById("gridContainer");
    const grid = Array.from({ length: gridSize }, () =>
        Array(gridSize).fill(null)
    );

    // Place words randomly in the grid
    words.forEach((word) => placeWord(grid, word));

    // Fill empty cells with random letters
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (!grid[row][col]) {
                grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }

    // Render the grid
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = grid[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Add event listeners for highlighting
            cell.addEventListener("mousedown", startSelection);
            cell.addEventListener("mouseover", continueSelection);
            cell.addEventListener("mouseup", endSelection);

            gridContainer.appendChild(cell);
        }
    }

    // Display word list
    const wordList = document.getElementById("wordList");
    words.forEach((word) => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.dataset.word = word;
        wordList.appendChild(listItem);
    });

    // Start the timer
    startTimer();
}

// Place a word in the grid
function placeWord(grid, word) {
    const directions = [
        { x: 1, y: 0 }, // Horizontal
        { x: 0, y: 1 }, // Vertical
        { x: 1, y: 1 }, // Diagonal
    ];

    let placed = false;
    while (!placed) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const startX = Math.floor(Math.random() * gridSize);
        const startY = Math.floor(Math.random() * gridSize);

        if (canPlaceWord(grid, word, startX, startY, direction)) {
            for (let i = 0; i < word.length; i++) {
                const x = startX + i * direction.x;
                const y = startY + i * direction.y;
                grid[x][y] = word[i].toUpperCase();
            }
            placed = true;
        }
    }
}

// Check if a word can be placed in the grid
function canPlaceWord(grid, word, x, y, direction) {
    for (let i = 0; i < word.length; i++) {
        const newX = x + i * direction.x;
        const newY = y + i * direction.y;

        if (
            newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize ||
            (grid[newX][newY] && grid[newX][newY] !== word[i].toUpperCase())
        ) {
            return false;
        }
    }
    return true;
}

// Handle word selection
function startSelection(e) {
    selectedCells = [];
    e.target.classList.add("highlight");
    selectedCells.push(e.target);
}

function continueSelection(e) {
    if (e.buttons === 1 && !selectedCells.includes(e.target)) {
        e.target.classList.add("highlight");
        selectedCells.push(e.target);
    }
}

function endSelection() {
    const selectedWord = selectedCells.map(cell => cell.textContent).join("").toLowerCase();
    if (words.includes(selectedWord) && !foundWords.includes(selectedWord)) {
        foundWords.push(selectedWord);
        document.querySelector(`[data-word="${selectedWord}"]`).classList.add("found");
    }
    selectedCells.forEach(cell => cell.classList.remove("highlight"));
    selectedCells = [];
    checkWin();
}

// Timer logic
function startTimer() {
    const timerElement = document.getElementById("timer");
    const interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {
            clearInterval(interval);
            document.getElementById("gameStatus").textContent = "Time's up! You lost!";
        }
    }, 1000);
}

// Check if the player has found all words
function checkWin() {
    if (foundWords.length === words.length) {
        document.getElementById("gameStatus").textContent = "Congratulations! You found all the words!";
    }
}

// Initialize the grid on page load
document.addEventListener("DOMContentLoaded", createGrid);
