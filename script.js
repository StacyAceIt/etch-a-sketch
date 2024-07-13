document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("grid-container");
    const gridSize = 16;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            //create an element
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.addEventListener("mouseover", () => {
                // add hover class
                div.classList.add("hovered");
            });
            div.addEventListener("mouseout", () => {
                // remove hover class
                div.classList.remove("hovered");
            });
            //append to container
            container.append(div);
        }
    }
});
