let container = document.querySelector(".container");

let size = 16;
for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j < size; j++) {
        let cell = document.createElement("div");
        cell.className = "gridsquare";
        cell.textContent = (i * size) + j;
        row.appendChild(cell);
    }
    container.appendChild(row);
}