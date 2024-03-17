import {calcNextGen, makeRandom2DArray} from "./GameOfLife.js";

let columns;
let rows;
let initialUniverse;
let resolution = 10;
let birdsong;
let playButton;
let volumeSlider;

/**
 * Preload function is used to preload any necessary assets before the setup() is called. It is called once.
 * In this case, it loads a birdsong audio file.
 * (https://p5js.org/reference/#/p5/preload)
 *
 * @function preload
 * @returns {undefined}
 */
function preload() {
    birdsong = loadSound('assets/birdsong.mp3');
}

/**
 * Initializes the canvas and sets up the initial state of the universe. It is called once.
 * (https://p5js.org/reference/#/p5/setup)
 *
 * @function setup
 * @returns {undefined}
 */
function setup() {
    createCanvas(440, 440);
    columns = width
    rows = height
    initialUniverse = makeRandom2DArray(rows, columns)

    // draw and position the button
    playButton = createButton('Start/Stop sound');
    playButton.position(0, 500);
    // call playSound when play button clicked
    playButton.mousePressed(playSound);

    // create volume slider
    volumeSlider = createSlider(0, 1, 0.5, 0);
    volumeSlider.position(200, 520);

    // set playback mode to 'restart'
    birdsong.playMode('restart');
}

/**
 * Clears the canvas and draws a 2D grid of living cells based on the initialUniverse array.
 * The living cells are filled with black color (255).
 *
 * Right after the setup function, the draw function is called continuously until the program is stopped or noLoop() is called.
 * The draw function is refreshed according to the frame rate (defined by the frameRate() function,
 * 60 FPS by default).
 * (https://p5js.org/reference/#/p5/draw)
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

    // Set volume for the birdsong
    birdsong.setVolume(volumeSlider.value());
}

function playSound() {
    if (birdsong.isPlaying()) {
        birdsong.stop()
    } else {
        birdsong.play();
    }
}

// Assigning the functions to the global window object.
window.setup = setup;
window.draw = draw;
window.preload = preload;
