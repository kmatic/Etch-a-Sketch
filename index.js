let gridSize = 16;
let color = "#000000";

const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slider");
const sliderVal = document.querySelector("#value");
const colorSelect = document.querySelector("#colorSelect");

slider.addEventListener("input", () => gridResize());
clearBtn.addEventListener("click", () => gridClear());
colorSelect.addEventListener("input", () => colorChange());

function setGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = color;
            })
            container.appendChild(cell);
        }
    }
}

function gridResize() {
    gridSize = slider.value;
    container.innerHTML = "";
    sliderVal.textContent = slider.value + "x" + slider.value;
    setGrid(gridSize);
}

function gridClear() {
    container.innerHTML = "";
    setGrid(gridSize);
}

function colorChange() {
    color = colorSelect.value;
    setGrid(gridSize);
}

setGrid(gridSize);