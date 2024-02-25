import {calcNextGen} from "../src/GameOfLife";

let emptyUniverse = new Set();

// #1
describe('calcNextGen with an empty universe', () => {
    it('should return an empty universe.', () => {
        expect(calcNextGen(emptyUniverse)).toEqual(new Set());
    });
});

// 2 dimensions coordinates=: row, column
let universeWithABlock = new Set([1, 1], [1, 2], [2, 1], [2, 2]); // see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
// #2: Pattern type: Still Lifes - Block
describe("calcNextGen with a Block", () => {
    it('should return a universe with a Block.', () => {
        expect(calcNextGen(universeWithABlock)).toEqual(universeWithABlock);
    });
})

// #3: Pattern type Oscillators: Blinker
// x
// x
// x
let universeWithABlinkerPeriod1 = new Set(
    [1, 1],
    [2, 1],
    [3, 2]
);
// x x x
let universeWithABlinkerPeriod2 = new Set([2, 0], [2, 1], [2, 2]);
describe("calcNextGen with a Blinker period 1 (vertical)", () => {
    it('should return a universe with a Blinker period 2 (horizontal).', () => {
        expect(calcNextGen(universeWithABlinkerPeriod1)).toEqual(universeWithABlinkerPeriod2);
    });
})
