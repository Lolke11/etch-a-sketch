let container = document.querySelector(".container");

let size = 8;
for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.className = "row";
        row.textContent = (i * size) + j;
        column.appendChild(row);
    }
    container.appendChild(column);
}

let rows = document.querySelectorAll(".row");
for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function() {
        rows[i].textContent = "click";
    })
}