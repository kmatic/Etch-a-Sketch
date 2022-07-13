const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hover");
    })
})
