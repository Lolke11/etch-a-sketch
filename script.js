let container = document.querySelector(".container");

let size = 8;
for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.className = "row";
        column.appendChild(row);
    }
    container.appendChild(column);
}

let color = "#000000";
function ChangeColor() {
    color = document.querySelector("#colorpicker").value;
}

let rows = document.querySelectorAll(".row");
for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("mouseover", function() {
        rows[i].style.backgroundColor = color;
    })
}