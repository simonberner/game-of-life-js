# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
This is a zero-player-game or so called "no-player game" because no human players are actively involved in "playing" it.

## Execution
### Jest-Tests
- Terminal: Use `npm test` to run the tests
- WebStorm: If you are using WebStorm as IDE, add `--experimental-vm-modules node_modules/jest/bin/jest.js jest --verbose` to the 'Node options' of the Jest-Tests run configuration and run them with that.

## Notes
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
