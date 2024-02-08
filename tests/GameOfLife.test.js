import { calcNextGen } from "../src/GameOfLife";

// An empty set reflects an empty universe
let initialUniverse = new Set();

// #1
describe('calcNextGen', () => {
    it('should return an empty universe if a empty universe is passed in.', () => {
        expect(calcNextGen(initialUniverse)).toEqual(new Set());
    });
});
