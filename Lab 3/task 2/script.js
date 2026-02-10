const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";
    span.textContent = taskText;
    span.className = "task-text";
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}