# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
## Description
This is a zero-player-game, a so called "no-player game" or simulation because no human players are actively involved in playing it.

## Tech Stack
- Vanilla JavaScript
- Jest
- JSHint

## Design
tbd

## Features
Each cell has 8 neighbours, except for the ones at the edge of the canvas.
### Rules
1. A dead cell will come alive if exactly 3 neighbours are living.
2. A living cell will stay alive if 2 or 3 neighbours are living.
3. A living cell with less than 2 neighbours will die of underpopulation
4. A living cell with 4 or more neighbours will die of overpopulation.

## How to run
### Jest-Tests
- Use `npm test` to run the tests
- Use `npm run test:watch` to enable the Jest watch mode to run all the tests
- WebStorm: If you are using WebStorm as IDE, add `--experimental-vm-modules node_modules/jest/bin/jest.js jest --verbose` to the 'Node options' of the Jest-Tests run configuration and run them with that.

## Approach
### Implementation Driven by Tests (TDD)
I am using TDD to evolve the implementation. This means:
1. I first write one or more failing test/s
2. Then I implement the "simplest" possible solution code till the test/s passes
3. I refactor the solution code (till the test/s passes again)
### Testing with Jest
#### ECMAScript Modules
- Using ECMAScript modules in Jest is still experimental!
- Consider [the following](https://jestjs.io/docs/ecmascript-modules) when running Jest in combination with JavaScript modules.
#### Script: `test:watch`
The `--watch` option is used to enable Jest's watch mode. When you run Jest with the `--watch` flag, it sets up a persistent process that watches for changes in your project files.
