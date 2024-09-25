document.getElementById("add").addEventListener("click", function() {
    const inputValue = document.getElementById("textfeld").value;

    if (inputValue !== "") {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        li.style.fontSize = "1em"; 
        li.style.padding = "10px"; 
        li.style.backgroundColor = "white";
        li.style.width = `${document.getElementById("textfeld").offsetWidth}px`; // Set width to match input
        li.style.overflow = "hidden";
        li.style.textOverflow = "ellipsis";
        li.style.marginBottom = "20px"; 
        li.style.display = "flex"; 
        li.style.justifyContent = "space-between"; 
        li.style.marginLeft = `${document.getElementById("textfeld").offsetLeft}px`; // Set margin-left to match input

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.width = "25px"; 
        checkbox.style.height = "25px"; 
        checkbox.style.marginRight = "10px"; 
        checkbox.addEventListener("click", function() {
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

        const text = document.createElement("span");
        text.textContent = inputValue;
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
