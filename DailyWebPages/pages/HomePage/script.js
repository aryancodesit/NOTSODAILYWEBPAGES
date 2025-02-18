document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const startDate = new Date("2025-01-20");
    const totalDays = 20; // Number of days available

    for (let dayIndex = 1; dayIndex <= totalDays; dayIndex++) {
        const dateElement = document.createElement("div");
        const dateString = startDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
        const dayFolder = `day${dayIndex}`;

        dateElement.classList.add("date");
        dateElement.textContent = startDate.getDate(); // Show only the date number
        dateElement.title = `${startDate.toDateString()}`; // Tooltip

        // Correct redirection using relative path
        dateElement.addEventListener("click", () => {
            window.location.href = `../${dayFolder}/${dateString}.html`;
        });

        calendar.appendChild(dateElement);

        // Move to the next day
        startDate.setDate(startDate.getDate() + 1);
    }
});
