const grid = document.querySelector('.grid');
const createBtn = document.querySelector('#createGridBtn');

createBtn.addEventListener('click', () => createGrid());

let getRandomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

let createGrid = () => {
    let gridSize = Number(prompt('Input the grid size (1-100): '));
    if (gridSize < 1 || gridSize > 100) {
        alert('Please input a number between 1 and 100!');
        return;
    }

    //Clear previous grid
    grid.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
            column.addEventListener('mouseenter', () => {
                column.style.backgroundColor = getRandomColor();
            })
        }

        grid.appendChild(row);
    }
}
