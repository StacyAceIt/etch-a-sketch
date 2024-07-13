document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("grid-container");
    const resetButton = document.getElementById("reset-button");
    const gridSize = 16;

    function createGrid(size) {
        container.innerHTML = ""; // Clear existing grid
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement("div");
                div.classList.add("grid-item");
                div.style.width = `${100 / size}%`;
                div.style.height = `${100 / size}%`;
                div.addEventListener("mouseover", () => {
                    div.classList.add("hovered");
                });

                container.append(div);
            }
        }
    }

    // Initialize grid
    createGrid(gridSize);

    resetButton.addEventListener("click", () => {
        let newGridSize = prompt("Enter new grid size (max limit 100): ");
        newGridSize = parseInt(newGridSize, 10); 
        if (newGridSize && newGridSize > 0 && newGridSize <= 100) {
            createGrid(newGridSize);
        } else {
            alert("Invalid grid size. Please enter a number between 1 and 100.");
        }
    });
});
