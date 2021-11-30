//functions
function createDivGrid(n) {
    if (n > 100) {
        n = 100;
    }

    // create n x n array
    let divGrid = [...Array(n)].map(e => Array(n));
    let divRows = [];

    //get grid container
    gridContainer = document.querySelector("#grid-container");

    // creates a grid of divs of size n x n
    for (let i = 0; i < n; i++) {
        divRows[i] = document.createElement("div");
        divRows[i].classList.add("div-grid-row");
        gridContainer.appendChild(divRows[i]);
        //console.log(divRows)

        for (let j = 0; j<n; j++) {
            divGrid[i][j] = document.createElement("div");
            divGrid[i][j].classList.add("div-grid-item");
            divGrid[i][j].addEventListener("mouseover",changeColorOnHover);
            divRows[i].appendChild(divGrid[i][j]);
        }
    }
}

function changeColorOnHover() {
    console.log(this)
    this.classList.add("touched");
}

function clearGrid() {
    gridContainer = document.querySelector("#grid-container");
    console.log(gridContainer);
    removeAllChildNodes(gridContainer);

    userInput = parseInt(prompt("Please enter new grid size"));

    createDivGrid(userInput);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//activity
createDivGrid(16);

clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click",clearGrid);