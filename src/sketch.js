import {makeRandom2DArray} from "./GameOfLife.js";

let columns;
let rows;
let initialUniverse;

function setup() {
    createCanvas(440, 440);
    columns = width
    rows = height
    initialUniverse = makeRandom2DArray(rows, columns)
}

function draw() {
    background(0);
}

window.setup = setup;
window.draw = draw;
