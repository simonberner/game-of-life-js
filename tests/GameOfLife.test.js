import {calcNextGen, makeEmpty2DArray} from "../src/GameOfLife";


// #1: An empty universe stays an empty universe
let emptyUniverse = makeEmpty2DArray(6, 6)
describe('calcNextGen with an empty universe', () => {
    it('should return an empty universe.', () => {
        expect(calcNextGen(emptyUniverse)).toEqual(emptyUniverse);
    });
});

// #2: Pattern type: Still Lifes - Block
// see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
let universeWithABlock = getUniverseWithABlock();
describe("calcNextGen with a Block", () => {
    it('should return a universe with a Block.', () => {
        expect(calcNextGen(universeWithABlock)).toEqual(universeWithABlock);
    });
})

// #3: Pattern type Oscillators: Blinker
let universeWithABlinkerPeriod1 = getBlinkerPeriod1Universe();
let universeWithABlinkerPeriod2 = getBlinkerPeriod2Universe();
describe("calcNextGen with a Blinker period 1 (vertical)", () => {
    it('should return a universe with a Blinker period 2 (horizontal).', () => {
        expect(calcNextGen(universeWithABlinkerPeriod1)).toEqual(universeWithABlinkerPeriod2);
    });
})

function getUniverseWithABlock() {
    let cols = 4;
    let rows = 4;
    let universe = makeEmpty2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if ((i === 1 || i === 2) && (j === 1 || j === 2)) {
                universe[i][j] = 1;
            } else {
                universe[i][j] = 0;
            }
        }
    }
    return universe;
}

function getBlinkerPeriod1Universe() {
    let cols = 6;
    let rows = 6;
    let universe = makeEmpty2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (i === 2 && (j === 1 || j === 2 || j === 3)) {
                universe[i][j] = 1
            } else {
                universe[i][j] = 0
            }
        }
    }
    return universe;
}

function getBlinkerPeriod2Universe() {
    let cols = 6;
    let rows = 6;
    let universe = makeEmpty2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (j == 2 && (i === 1 || i === 2 || i === 3)) {
                universe[i][j] = 1
            } else {
                universe[i][j] = 0
            }
        }
    }
    return universe;
}
