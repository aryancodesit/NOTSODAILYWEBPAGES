document.getElementById('hobbiesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const hobbies = Array.from(document.getElementById('hobbies').selectedOptions).map(option => option.value);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Thank you, ${name}!</h2><p>Your hobbies are: ${hobbies.join(', ')}</p>`;
    
    // Clear the form
    this.reset();
});