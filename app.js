// Get references to HTML elements
const taskForm = document.getElementById("taskForm");
const taskNameInput = document.getElementById("taskName");
const dueDateInput = document.getElementById("dueDate");
const assigneeInput = document.getElementById("assignee");
const taskList = document.getElementById("taskList");

// Function to create a new task
function createTask(event) {
    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const dueDate = dueDateInput.value.trim();
    const assignee = assigneeInput.value.trim();

    if (taskName !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item";
        taskItem.innerHTML = `
            <strong>${taskName}</strong><br>
            Due Date: ${dueDate}<br>
            Assignee: ${assignee}<br>
            Status: <span class="task-status">Not Started</span>
        `;

        taskList.appendChild(taskItem);

        // Clear input fields
        taskNameInput.value = "";
        dueDateInput.value = "";
        assigneeInput.value = "";

        // Add event listener for marking tasks as completed
        taskItem.addEventListener("click", () => {
            const taskStatus = taskItem.querySelector(".task-status");
            if (taskStatus.textContent === "Not Started") {
                taskStatus.textContent = "Completed";
                taskItem.style.backgroundColor = "#d4edda"; // Green background for completed tasks
            } else {
                taskStatus.textContent = "Not Started";
                taskItem.style.backgroundColor = "#fff"; // Reset background color for not started tasks
            }
        });
    }
}

// Event listener for task creation form
taskForm.addEventListener("submit", createTask);
