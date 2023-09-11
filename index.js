
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
    grid.addEventListener('mouseover', e => {
        if (e.target.className === 'cell')
            e.target.style.backgroundColor = 'green';
    })
    return grid;
}

let startGrid = GenerateGrid(16);
document.body.appendChild(startGrid);

const btn = document.querySelector('.btn').addEventListener('click', newGrid);

function newGrid() {
    const input = parseInt(prompt("Number of squares per side 0-100"));
    if (typeof input !== 'number' || isNaN(input)) {
        alert("Error: Invalid input; has to be a number.");
        return;
    }
    else if (input > 100 || input < 0) {
        alert("Error: Grid size has to be between 0 and 100");
        return;
    }
    //remove existing grid
    document.querySelector('.grid').remove();
    //create new grid and append
    const userGrid = GenerateGrid(input);
    document.body.appendChild(userGrid);
}
