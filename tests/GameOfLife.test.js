import { calcNextGen } from "../src/GameOfLife";

let emptyUniverse = new Set();

// #1
describe('calcNextGen with an empty universe', () => {
    it('should return an empty universe.', () => {
        expect(calcNextGen(emptyUniverse)).toEqual(new Set());
    });
});
