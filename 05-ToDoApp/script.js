
// ===================================
// 1. SELECT HTML ELEMENTS
// ===================================

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const taskCount = document.getElementById("taskCount");


// ===================================
// 2. TASK ARRAY
// ===================================

let tasks = [];


// ===================================
// 3. ADD TASK (CREATE)
// ===================================


function addTask() {

    const taskText = taskInput.value.trim();

    // Check empty input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Check duplicate task
    const isDuplicate = tasks.some(function(task) {
        return task.text.toLowerCase() === taskText.toLowerCase();
    });

    if (isDuplicate) {
        alert("This task already exists!");
        taskInput.value = "";
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add task to array
    tasks.push(task);

    // Clear input
    taskInput.value = "";

    // Display tasks
    displayTasks();

}


// ===================================
// 4. DISPLAY TASKS (READ)
// ===================================

function displayTasks() {

    // Clear previous HTML
    taskList.innerHTML = "";

    // Check empty array
    if (tasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty-message">
                No tasks yet. Add your first task!
            </p>
        `;

    }

    // Loop through array
    tasks.forEach(function(task) {

        const taskElement = document.createElement("div");

        taskElement.className = "task";

        taskElement.innerHTML = `
            <div class="task-info">

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                >

                <span class="${task.completed ? "completed" : ""}">
                    ${task.text}
                </span>

            </div>

            <button class="delete-btn" onclick="deleteTask(${task.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        taskList.appendChild(taskElement);

    });

    updateStats();

}


// ===================================
// 5. COMPLETE TASK (UPDATE)
// ===================================

function toggleTask(id) {

    tasks = tasks.map(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;

    });

    displayTasks();

}


// ===================================
// 6. DELETE TASK (DELETE)
// ===================================

function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();

}


// ===================================
// 7. UPDATE STATISTICS
// ===================================

function updateStats() {

    const total = tasks.length;

    const completed = tasks.filter(function(task) {
        return task.completed === true;
    }).length;

    const pending = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;

    taskCount.textContent = total + (total === 1 ? " Task" : " Tasks");

}


// ===================================
// 8. EVENT LISTENERS
// ===================================

addBtn.addEventListener("click", addTask);


// Add task when Enter is pressed

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Initial display

displayTasks();
