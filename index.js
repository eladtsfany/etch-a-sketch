
// a function that generates an NxN grid and returns it.
function GenerateGrid(n) {
    const grid = document.createElement('div');
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < n; j++) {
            const column = document.createElement('div');
            column.className = 'column';
            row.appendChild(column);
        }
        grid.appendChild(row);
    }
    grid.className = 'grid';
    return grid;
}
const grid16 = GenerateGrid(16);
document.body.appendChild(grid16);

grid16.addEventListener('mouseover', e => {
    if (e.target.className === 'column')
        e.target.style.backgroundColor = 'green';
})