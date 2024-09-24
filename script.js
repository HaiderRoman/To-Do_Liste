document.getElementById("add").addEventListener("click", function() {
    const inputValue = document.getElementById("textfeld").value;

    if (inputValue !== "") {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        const text = document.createElement("span");
        text.textContent = inputValue;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);
        document.getElementById("todo-list").appendChild(li);
        document.getElementById("textfeld").value = "";
    }
});
