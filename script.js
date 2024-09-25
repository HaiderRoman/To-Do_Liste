let tasks = [];

function createListItem(taskText, completed) {
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.fontSize = "1em";
    li.style.padding = "10px";
    li.style.backgroundColor = "white";
    li.style.width = `${document.getElementById("textfeld").offsetWidth}px`;
    li.style.overflow = "hidden";
    li.style.textOverflow = "ellipsis";
    li.style.marginBottom = "20px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.marginLeft = `${document.getElementById("textfeld").offsetLeft}px`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.width = "25px";
    checkbox.style.height = "25px";
    checkbox.style.marginRight = "10px";
    checkbox.checked = completed;

    const text = document.createElement("span");
    text.textContent = taskText;
    text.style.fontSize = "1.3em";
    text.style.whiteSpace = "nowrap";
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.style.fontSize = "20px";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "5px 15px";
    deleteButton.style.cursor = "pointer";

    checkbox.addEventListener("click", function () {
        const taskIndex = tasks.findIndex(t => t.task === taskText);
        tasks[taskIndex].completed = checkbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        if (checkbox.checked) {
            li.classList.add("completed");
            text.style.textDecoration = "line-through";
            text.style.color = "grey";
            checkbox.style.outline = "2px solid blue";
        } else {
            li.classList.remove("completed");
            text.style.textDecoration = "none";
            text.style.color = "black";
            checkbox.style.outline = "none";
        }
    });

    deleteButton.addEventListener("click", function () {
        if (confirm("Möchten Sie diese Aufgabe wirklich löschen?")) {
            li.remove();
            tasks = tasks.filter(t => t.task !== taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    if (completed) {
        li.classList.add("completed");
        text.style.textDecoration = "line-through";
        text.style.color = "grey";
        checkbox.style.outline = "2px solid blue";
    }

    return li;
}

function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            const li = createListItem(task.task, task.completed);
            document.getElementById("todo-list").appendChild(li);
        });
    }
}

document.getElementById("add").addEventListener("click", function () {
    const inputValue = document.getElementById("textfeld").value;

    if (inputValue !== "") {
        tasks.push({ task: inputValue, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        const li = createListItem(inputValue, false);
        document.getElementById("todo-list").appendChild(li);
        document.getElementById("textfeld").value = "";
    }
});

document.addEventListener("DOMContentLoaded", loadTasks);