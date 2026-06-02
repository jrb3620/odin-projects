function createGrid(size) {
    for(let i = 0; i < size; i++){
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.classList.add("div-grid");
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "white";
            });
            divContainer.appendChild(div);
        }
    }
}
function resetGrid() {
    divContainer.replaceChildren();
}

const resetButton = document.querySelector("#reset-button");
const createGridButton = document.querySelector("#create-grid-button");
    const divContainer = document.querySelector("#div-container");
resetButton.addEventListener("click", () => {
    resetGrid();
});
createGridButton.addEventListener("click", () => {
    let input = prompt("Please enter the grid size (input x input size). Do not enter anything over 100.");
    if(input >= 1 && input <= 100 ) {
        createGrid(input);
    }
    else {
        alert("Invalid input");
    }
});