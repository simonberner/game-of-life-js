import { calcNextGen } from "../src/GameOfLife";

let emptyUniverse = new Set();

// #1
describe('calcNextGen with an empty universe', () => {
    it('should return an empty universe.', () => {
        expect(calcNextGen(emptyUniverse)).toEqual(new Set());
    });
});

// 2 dimensions coordinates=: row, column
let universeWithABlock = new Set([1,1], [1,2], [2,1], [2,2]);
// #2: Still Lifes - Block
describe("calcNextGen with a Block", () => {
    it('should return a universe with a Block.', () => {
        expect(calcNextGen(universeWithABlock)).toEqual(universeWithABlock);
    });
})
