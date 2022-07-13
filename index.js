let gridSize = 16;

const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const sliderVal = document.querySelector("#value");

slider.addEventListener("input", () => gridResize());

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

function gridResize() {
    gridSize = slider.value;
    container.innerHTML = "";
    sliderVal.textContent = slider.value;
    setGrid(gridSize);
}

setGrid(gridSize);