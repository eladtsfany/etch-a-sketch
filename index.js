let penColor = 'black';
let click = false;

// a function that creates an NxN grid and returns it.
function GenerateGrid(n) {
    const grid = document.createElement('div');
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    grid.className = 'grid';
    grid.addEventListener('click', toggleClick);
    grid.addEventListener('mouseover', handleColor);
    return grid;
}

const gridContainer = document.getElementById('grid-container');
let startGrid = GenerateGrid(16);
gridContainer.appendChild(startGrid);

/*
button with prompt instead of slider for the grid size.
const btn = document.getElementById('grid-size').addEventListener('click', newGrid); 

function newGrid() {
    const input = parseInt(prompt("Number of squares per side 0-64"));
    if (typeof input !== 'number' || isNaN(input)) {
        alert("Error: Invalid input; has to be a number.");
        return;
    }
    else if (input > 64 || input < 0) {
        alert("Error: Grid size has to be between 0 and 64");
        return;
    }
    //remove existing grid
    document.querySelector('.grid').remove();
    //create new grid and append it to our container
    const userGrid = GenerateGrid(input);
    gridContainer.appendChild(userGrid);
}
*/
function toggleClick() {
    click = !click;
    const toggle = document.getElementById('toggle-draw');
    if (click) {
        toggle.textContent = 'Toggled!';
        toggle.style.color = 'green';
    }
    else {
        toggle.textContent = 'Not toggled..';
        toggle.style.color = 'darkred';
    }
}

function handleColor(e) {
    if (!click) {
        return;
    }
    if (e.target.classList.contains('cell')) {
        if (penColor === 'gray') {
            e.target.style.filter = 'none';
            e.target.style.backgroundColor = 'gray';
        }
        else if (penColor === 'rainbow') {
            e.target.style.filter = 'none';
            e.target.style.backgroundColor = randomColor();
        }
        else if (penColor === 'eraser') {
            e.target.style.filter = 'none';
            e.target.style.backgroundColor = '';
        }
        // grascale functionality currently doesn't work
        // else if (penColor === 'gray-scale') {
        //     // currentScale = grayscale(10%) -> returns the float 10 to currentScale.
        //     let currentScale = parseFloat(e.target.style.filter.replace("grayscale(", "").replace("%)", ""));
        //     if (isNaN(currentScale)) {
        //         currentScale = 0;
        //     }
        //     currentScale += 20;
        //     if (currentScale <= 100) {
        //         e.target.style.filter = `grayscale(${currentScale}%)`;
        //         console.log(e.target);
        //     }
        // }
        else {
            e.target.style.backgroundColor = penColor;
            e.target.style.filter = 'grayscale(0))';
        }
    }
}

function newGrid(size) {
    //remove existing grid
    document.querySelector('.grid').remove();
    //create new grid and append it to our container
    const userGrid = GenerateGrid(size);
    gridContainer.appendChild(userGrid);
}

const slider = document.getElementById('grid-size');
slider.addEventListener('input', () => {
    const sliderHeader = document.querySelector('.slider-header');
    sliderHeader.textContent = `${slider.value} x ${slider.value}`;
    newGrid(slider.value);
}
);

function randomColor() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}


// function colorInput(e) {
//     penColor = e.target.value;
// }

document.getElementById('color-input').addEventListener('input', (e) => penColor = e.target.value);
// document.getElementById('color-picker').addEventListener('click', colorPicker);
document.getElementById('rainbow').addEventListener('click', () => penColor = 'rainbow');
document.getElementById('gray').addEventListener('click', () => penColor = 'gray');
// document.getElementById('gray-scale').addEventListener('click', () => penColor = 'gray-scale');
document.getElementById('eraser').addEventListener('click', () => penColor = 'eraser');
document.getElementById('reset').addEventListener('click', () => newGrid(slider.value));
