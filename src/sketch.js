import {calcNextGen, makeRandom2DArray} from "./GameOfLife.js";

let columns;
let rows;
let initialUniverse;
let resolution = 10;

/**
 * Initializes the canvas and sets up the initial state of the universe.
 *
 * @function setup
 * @returns {undefined}
 */
function setup() {
    createCanvas(440, 440);
    columns = width
    rows = height
    initialUniverse = makeRandom2DArray(rows, columns)
}

/**
 * Clears the canvas and draws a 2D grid of living cells based on the initialUniverse array.
 * The living cells are filled with black color (255).
 *
 * Right after the setup function, the draw function is called continuously until the program is stopped or noLoop() is called.
 * The draw function is refreshed according to the frame rate (defined by the frameRate() function,
 * 60 FPS by default).
 *
 * @returns {void}
 */
function draw() {
    background(0);

    // Draw the 2D grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let x = j * resolution;
            let y = i * resolution;
            // Fill a living cell with black (255)
            if (initialUniverse[i][j] === 1) {
                fill(255);
                stroke(0);
                rect(x, y, resolution, resolution);
            }
        }
    }
    initialUniverse = calcNextGen(initialUniverse);
}

window.setup = setup;
window.draw = draw;
