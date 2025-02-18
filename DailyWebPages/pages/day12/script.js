const words = ['book', 'apple', 'car', 'dog', 'cat', 'house', 'tree', 'chair', 'table', 'bag', 'shirt', 'phone', 'computer', 'pen', 'pencil', 'school', 'city', 'village', 'road', 'bridge', 'river', 'mountain', 'ocean', 'lake', 'friend', 'family', 'teacher', 'student', 'child', 'parent', 'doctor', 'nurse', 'farmer', 'artist', 'engineer', 'scientist', 'player', 'driver', 'actor', 'singer', 'dancer', 'poet', 'writer', 'king', 'queen', 'leader', 'president', 'bird', 'fish', 'cow', 'horse', 'sheep', 'room', 'kitchen', 'garden', 'office', 'building', 'window', 'door', 'wall', 'floor', 'roof', 'market', 'shop', 'store', 'train', 'bus', 'plane', 'bike', 'bottle', 'box', 'clock', 'watch', 'movie', 'game', 'sport', 'team', 'music', 'song', 'story', 'paper', 'letter', 'gift', 'photo', 'camera', 'bookstore', 'park', 'restaurant', 'hotel', 'beach', 'island', 'forest', 'flower', 'food', 'drink', 'toy', 'coin', 'key', 'light', 'mirror'];
let currentWord = '';
let scrambledWord = '';

// Function to scramble a word
function scrambleWord(word) {
    let scrambled = word.split('');
    for (let i = scrambled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
    }
    return scrambled.join('');
}

// Function to display the scrambled word
function displayScrambledWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('scrambled-word').textContent = scrambledWord;
    document.getElementById('user-input').value = '';
    document.getElementById('result').textContent = '';
}

// Function to check the user's answer
function checkAnswer() {
    const userInput = document.getElementById('user-input').value.toLowerCase().trim();
    if (userInput === currentWord) {
        document.getElementById('result').textContent = 'Correct! Well done.';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = 'Incorrect. Try again!';
        document.getElementById('result').style.color = 'red';
    }
}

// Function to load the next word
function nextWord() {
    displayScrambledWord();
}

// Initialize the first scrambled word when the page loads
window.onload = displayScrambledWord;
