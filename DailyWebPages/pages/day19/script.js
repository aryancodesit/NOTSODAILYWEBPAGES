// Initialize empty poll data
let pollData = {
    question: "",
    options: ["", "", "", ""],
    votes: [0, 0, 0, 0]
};

// Store poll results in LocalStorage
function savePollData() {
    localStorage.setItem('pollData', JSON.stringify(pollData));
}

// Load poll data from LocalStorage
function loadPollData() {
    const savedPollData = localStorage.getItem('pollData');
    if (savedPollData) {
        pollData = JSON.parse(savedPollData);
        displayPollVoting();
    }
}

// Create Poll
document.getElementById('pollForm').addEventListener('submit', function (event) {
    event.preventDefault();

    pollData.question = document.getElementById('pollQuestion').value;
    pollData.options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value
    ];

    // Hide form and show voting options
    document.getElementById('pollFormContainer').style.display = 'none';
    document.getElementById('pollVotingContainer').style.display = 'block';
    displayPollVoting();

    savePollData();
});

// Display Poll Voting
function displayPollVoting() {
    document.getElementById('pollQuestionDisplay').textContent = pollData.question;
    document.getElementById('option1Text').textContent = pollData.options[0];
    document.getElementById('option2Text').textContent = pollData.options[1];
    document.getElementById('option3Text').textContent = pollData.options[2];
    document.getElementById('option4Text').textContent = pollData.options[3];
}

// Handle Voting
document.getElementById('voteForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const selectedOption = document.querySelector('input[name="pollOption"]:checked');
    if (selectedOption) {
        const votedOption = parseInt(selectedOption.id.slice(-1)) - 1; // Get option index
        pollData.votes[votedOption]++;
        displayResults();
        savePollData();
    } else {
        alert("Please select an option.");
    }
});

// Display Results
function displayResults() {
    document.getElementById('pollVotingContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';

    const totalVotes = pollData.votes.reduce((acc, curr) => acc + curr, 0);
    let resultMessage = "Results:\n";
    
    pollData.options.forEach((option, index) => {
        const percentage = totalVotes > 0 ? ((pollData.votes[index] / totalVotes) * 100).toFixed(2) : 0;
        resultMessage += `${option}: ${percentage}%\n`;
    });

    document.getElementById('resultMessage').textContent = resultMessage;

    // Display Chart
    const ctx = document.getElementById('pollChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pollData.options,
            datasets: [{
                label: 'Votes',
                data: pollData.votes,
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: Math.max(...pollData.votes) + 1
                }
            }
        }
    });
}

// Load any saved poll data when the page loads
loadPollData();
