// Maze dimensions and setup
const mazeSize = 5;
const mazeContainer = document.getElementById("maze");
const statusText = document.getElementById("status");

const maze = [
    ['S', '0', '1', '0', '0'],
    ['1', '0', '1', '0', '1'],
    ['1', '0', '0', '0', '0'],
    ['1', '1', '1', '1', 'E'],
    ['0', '0', '0', '1', '1']
];

// Initial player position
let playerPosition = { row: 0, col: 0 };

// Function to render the maze
function renderMaze() {
    mazeContainer.innerHTML = ''; // Clear previous maze

    for (let row = 0; row < mazeSize; row++) {
        for (let col = 0; col < mazeSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if (maze[row][col] === '1') {
                cell.classList.add('wall');
            } else if (maze[row][col] === 'S') {
                cell.classList.add('start');
            } else if (maze[row][col] === 'E') {
                cell.classList.add('end');
            }

            if (row === playerPosition.row && col === playerPosition.col) {
                cell.classList.add('player');
            }

            mazeContainer.appendChild(cell);
        }
    }
}

// Function to move the player
function movePlayer(direction) {
    const { row, col } = playerPosition;
    
    let newRow = row;
    let newCol = col;

    switch (direction) {
        case 'up':
            newRow = row - 1;
            break;
        case 'down':
            newRow = row + 1;
            break;
        case 'left':
            newCol = col - 1;
            break;
        case 'right':
            newCol = col + 1;
            break;
    }

    if (newRow >= 0 && newRow < mazeSize && newCol >= 0 && newCol < mazeSize && maze[newRow][newCol] !== '1') {
        playerPosition = { row: newRow, col: newCol };
    }

    if (maze[playerPosition.row][playerPosition.col] === 'E') {
        statusText.textContent = "You reached the end!";
    } else {
        renderMaze();
    }
}

// Event listeners for arrow key navigation
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer('up');
            break;
        case 'ArrowDown':
            movePlayer('down');
            break;
        case 'ArrowLeft':
            movePlayer('left');
            break;
        case 'ArrowRight':
            movePlayer('right');
            break;
    }
});

// Render the maze initially
renderMaze();
