let gridSize = 16;
const container = document.querySelector(".container");
const sizeButton = document.querySelector("#size");

sizeButton.addEventListener("click", () => gridResize());

function gridResize() {
    do {
        gridSize = prompt("Please enter a value for squares per side (max 100)");
    } while (gridSize <= 0 || gridSize > 100);
    container.innerHTML = "";
    setGrid(gridSize);
}

function setGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                cell.classList.add("hover");
            })
            container.appendChild(cell);
        }
    }
}

setGrid(gridSize);