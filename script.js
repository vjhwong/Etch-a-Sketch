// Function definitions //

function calculateFlexBasis(gridSize, containerWidth) {
    return containerWidth / gridSize;
}

function createGrid(gridSize, container) {
    const containerWidth = container.offsetWidth;
    const flexBasis = calculateFlexBasis(gridSize, containerWidth);
    console.log(flexBasis);

    container.style.display = "flex";
    container.style.flexWrap = "wrap";

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridBox = document.createElement("div");
            gridBox.setAttribute("class", "grid-box");
            gridBox.style.width = flexBasis + "px";
            gridBox.style.height = flexBasis + "px";

            gridBox.addEventListener("mouseover", function () {
                gridBox.style.backgroundColor = "black";
            });

            container.appendChild(gridBox);
        }
    }
}

function getGridSizeInput() {
    const gridSizeInput = prompt("Enter the grid size (maximum 100): ");
    return parseInt(gridSizeInput);
}

function removeGrid(container) {
    container.innerHTML = "";
}

function validateGridSize(gridSize) {
    // Check if the parsed value is a valid integer
    if (!isNaN(gridSize)) {
        // User input is a valid integer
        if (gridSize > 100) {
            alert("Invalid input. Too large");
        } else {
            return true;
        }
    } else {
        // User input is not a valid integer
        alert("Invalid input. Please enter a valid integer.");
    }
}

function updateGrid() {
    const gridSize = getGridSizeInput();
    if (validateGridSize) {
        removeGrid(container);
        createGrid(gridSize, container)
    }
}

// main //
let container = document.getElementById("container");

createGrid(16, container)

const updateGridButton = document.getElementById("update-grid-button");
updateGridButton.addEventListener("click", updateGrid);


