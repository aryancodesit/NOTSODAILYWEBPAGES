// Get the DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to create a new task
function createTask(taskContent) {
    const listItem = document.createElement("li");

    // Add task content to the list item
    listItem.textContent = taskContent;

    // Add a button to mark task as completed
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("completeBtn");

    // Add a button to remove the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("removeBtn");

    // Add event listener to mark the task as completed
    completeButton.addEventListener("click", function () {
        listItem.classList.toggle("completed");
    });

    // Add event listener to remove the task
    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Append buttons to the list item
    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", function () {
    const taskContent = taskInput.value.trim();

    if (taskContent) {
        createTask(taskContent);
        taskInput.value = ""; // Clear the input field after adding the task
    } else {
        alert("Please enter a task!");
    }
});

// Allow user to press "Enter" to add a task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTaskButton.click();
    }
});
