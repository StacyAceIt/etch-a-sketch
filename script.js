const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const randomButton = document.getElementById("random-button");
const darkenButton = document.getElementById("darken-button");
const gridSize = 16;

function createGrid(size, hoveringEffect="defaultReset") {
    container.innerHTML = ""; // Clear existing grid
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.style.width = `${100 / size}%`;
            div.style.height = `${100 / size}%`;
            div.style.opacity = 1;
            div.dataset.interactions = 0;
            if (hoveringEffect === "random") {
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = getRandomColor();                   
                });
            } else if (hoveringEffect === "darken") {
                div.addEventListener("mouseover", () => {
                    let interactions = parseInt(div.dataset.interactions);
                    interactions++;
                    div.dataset.interactions = interactions;
                    div.style.backgroundColor = `rgba(0, 0, 0, ${interactions / 10})`;
                });
            } else {
                div.addEventListener("mouseover", () => {
                    div.style.opacity = 0;
                });
            }
            

            container.append(div);
        }
    }
}

function promptUser(hoveringEffect="defaultReset"){
    let newGridSize = prompt("Enter new grid size (max limit 100): ");
    newGridSize = parseInt(newGridSize, 10); 
    if (newGridSize && newGridSize > 0 && newGridSize <= 100) {
        createGrid(newGridSize, hoveringEffect);
    } else {
        alert("Invalid grid size. Please enter a number between 1 and 100.");
    }
}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// Initialize grid
createGrid(gridSize);

resetButton.addEventListener("click", () => promptUser());

randomButton.addEventListener("click", () => promptUser("random"));

darkenButton.addEventListener("click", () => promptUser("darken"));
