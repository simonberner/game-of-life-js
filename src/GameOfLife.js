function calcNextGen(initialUniverse) {
    let cols = initialUniverse[0].length;
    let rows = initialUniverse[1].length;
    let nextUniverse = makeEmpty2DArray(cols, rows);

    // Compute nextUniverse based on the initialUniverse
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // Current state of the cell
            let currentState = initialUniverse[i][j];
            // Count live neighbors of the cell
            let liveNeighbors = countLiveNeighbours(initialUniverse, i, j);

            // Rule: A dead cell will come alive if exactly 3 neighbours are living.
            if (currentState === 0 && liveNeighbors === 3) {
                nextUniverse[i][j] = 1
                // Rule: A living cell with less than 2 or more than 3 living neighbours dies.
            } else if (currentState === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                nextUniverse[i][j] = 0
                // Rule: In all the other cases the cell keeps its current state
            } else {
                nextUniverse[i][j] = currentState
            }
        }
    }
    return nextUniverse;
}

// Make an empty 2D Array
function makeEmpty2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

// A cell has 8 neighbours
// x(column), y(row): coordinates of the cell we are looking at
function countLiveNeighbours(initialUniverse, x, y) {
    let cols = initialUniverse[0].length;
    let rows = initialUniverse[1].length;
    let count = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols; // around the edges
            let row = (y + j + rows) % rows; // around the edges
            count += initialUniverse[col][row];
        }
    }
    // Do not count the cell we are currently looking at
    count -= initialUniverse[x][y];
    return count;
}

export {calcNextGen, makeEmpty2DArray};
