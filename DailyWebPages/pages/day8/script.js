// Get the DOM elements
const namesInput = document.getElementById('namesInput');
const pickNameBtn = document.getElementById('pickNameBtn');
const randomNameSpan = document.getElementById('randomName');

// Function to pick a random name from the input list
function pickRandomName() {
    const names = namesInput.value.split(',').map(name => name.trim()).filter(name => name !== '');
    
    if (names.length === 0) {
        alert("Please enter at least one name.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    
    randomNameSpan.textContent = randomName;
}

// Event listener for the pick name button
pickNameBtn.addEventListener('click', pickRandomName);
