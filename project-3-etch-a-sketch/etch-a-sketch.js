const divContainer = document.querySelector("#div-container");
for(let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add("div-grid");
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "white";
    });
    divContainer.appendChild(div);
}