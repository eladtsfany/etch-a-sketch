// a function that generates a 16x16 grid and returns it.
function divGrid16() {
    const grid = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 16; j++) {
            const column = document.createElement('div');
            column.className = 'column';
            row.appendChild(column);
        }
        grid.appendChild(row);
    }
    grid.className = 'grid';
    return grid;
}

document.body.appendChild(divGrid16());