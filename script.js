document.addEventListener("DOMContentLoaded", () =>{
    let grid = "";
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            grid += "<div class = 'grid-item'></div>"
        }
    }

    const container = document.getElementById("grid-container");
    container.innerHTML = grid;
});