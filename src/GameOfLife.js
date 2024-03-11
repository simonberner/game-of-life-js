/**
 * Calculates the next generation of the given universe based on the rules of Conway's Game of Life.
 *
 * @param {number[][]} initialUniverse - The initial state of the universe represented as a 2D array of numbers.
 * @returns {number[][]} - The next generation of the universe represented as a 2D array of numbers.
 */
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

/**
 * Creates an empty 2D array with the specified number of columns and rows.
 *
 * @param {number} cols - The number of columns in the array.
 * @param {number} rows - The number of rows in the array.
 * @returns {any[]} - The empty 2D array.
 */
function makeEmpty2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

/**
 * Counts the number of live neighbors for a given cell in the initial universe.
 * (A cell has 8 neighbours)
 *
 * @param {number[][]} initialUniverse - The initial universe grid.
 * @param {number} x - The x-coordinate of the cell.
 * @param {number} y - The y-coordinate of the cell.
 * @returns {number} - The number of live neighbors for the given cell.
 */
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
