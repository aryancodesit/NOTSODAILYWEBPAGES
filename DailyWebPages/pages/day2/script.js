let timer;
let totalTime = 0;
let running = false;

const timeInput = document.getElementById("timeInput");
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
    display.textContent = formatTime(totalTime);
}

startBtn.addEventListener("click", () => {
    if (!running) {
        totalTime = totalTime || parseInt(timeInput.value, 10) || 0;
        if (totalTime > 0) {
            running = true;
            timer = setInterval(() => {
                if (totalTime > 0) {
                    totalTime--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    running = false;
                    alert("Time's up!");
                }
            }, 1000);
        }
    }
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    running = false;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    running = false;
    totalTime = 0;
    updateDisplay();
    timeInput.value = "";
});

// Initialize display
updateDisplay();
