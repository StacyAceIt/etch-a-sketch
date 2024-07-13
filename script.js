document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("grid-container");
    const gridSize = 16;
    
    container.style.backgroundImage = "url('./goofy-duck.png')";
    container.style.backgroundSize = "cover";
    container.style.position = "relative";

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.addEventListener("mouseover", () => {
                div.style.opacity = "0";
            });
            container.appendChild(div);
        }
    }
});
