# [](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
<h1 align=center>Conway's Game of Life</h1>

<p align="center">
    <a href="https://nodejs.org">
        <img src="https://img.shields.io/badge/node-20,11+-blue.svg?style=for-the-badge" />
    </a>
    <a href="https://jestjs.io/">
        <img src="https://img.shields.io/badge/jest-29.7.0-brightgreen.svg?style=for-the-badge" />
    </a>
    <a href="https://jshint.com/">
        <img src="https://img.shields.io/badge/jshint-2.13.6-brightgreen.svg?style=for-the-badge" />
    </a>
    <a href="https://p5js.org/">
        <img src="https://img.shields.io/badge/p5js-1.9.1-brightgreen.svg?style=for-the-badge" />
    </a>
    <a href="https://twitter.com/simonbernerdev">
        <img src="https://img.shields.io/badge/Contact-@simonbernerdev-orange?style=for-the-badge" alt="Twitter: @simonbernerdev" />
    </a>
    <a href="https://gitmoji.dev">
        <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=for-the-badge" alt="Gitmoji">
    </a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/license-MIT-black.svg?style=for-the-badge" />
    </a>
</p>

This is a zero-player-game, a so called "no-player game" or simulation because no human players are actively involved in playing it.

---
## Contents
* [Tech Stack](#tech-stack)
* [Design](#design)
* [Features](#features)
* [Definitions](#definitions)
* [How to run](#how-to-run)
* [Approach](#approach)
* [Learnings](#learnings)
* [Resources](#resources)
---

## Tech Stack
- Vanilla JavaScript
### devDependencies
- [Jest](https://jestjs.io/) (for Testing)
- [JSHint](https://jshint.com/) (for code quality)
### dependencies
- [p5](https://p5js.org/) (for drawing)

## Design
No idea what to put here.

## Features
Each cell has 8 neighbours, even the ones at the edge of the universe.
### Rules
1. A dead cell will come alive if exactly 3 neighbours are living.
2. A living cell will stay alive if 2 or 3 neighbours are living.
3. A living cell with less than 2 neighbours will die of underpopulation
4. A living cell with 4 or more neighbours will die of overpopulation.

In short this means:  
- 0 -> 3 live neighbours -> 1 (A dead cell will come alive if exactly 3 neighbours are living.)  
- 1 -> <2 live neighbours || >3 live neighbours -> 0 (A living cell with less than 2 or more than 3 living neighbours dies.)

## Definitions
- universe: 2D grid
- 2D grid: consists of columns `x` and rows `y`

## How to run
### Jest-Tests
- Use `npm test` to run the tests
- Use `npm run test:watch` to enable the Jest watch mode to run all the tests
- WebStorm: If you are using WebStorm as IDE, add `--experimental-vm-modules node_modules/jest/bin/jest.js jest --verbose` to the 'Node options' of the Jest-Tests run configuration and run them with that.
### Visualisation
You see a visual representation of the game running in an endless-loop [on this page here](https://simonberner.github.io/game-of-life-js/). If you want to trigger a fresh initial start of the game, reload the page in the browser.

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

## Learnings
### TDD
- In TDD I still struggle with the step: *Then I implement the "simplest" possible solution code till the test/s passes.* Implementing a first bunch of basic tests can be quite simple and straight forward but
as things move on we need to add more logic in a higher dose. Not rushing ahead in that moment is crucial.
### p5js
- In the sketch.js, we provide our own implementations of the p5js functions that define how the sketch should setup, update, and optionally preload assets. This is not so much overriding (as in object-oriented programming)
as it is defining these functions for p5.js to use. Then we need to assign the functions to the global window object to ensure they are properly recognized by the p5.js library.
- p5.min.js: basic library for the processing.
- p5.dom.min.js: this library is specifically focusing on HTML manipulations and interactions. It provides a simple way to interact with HTML5 objects, such as the canvas, video, audio, and more.
- p5.sound.min.js: is an extension library that provides web audio functionality for the p5.js library, which is a JavaScript library for creative coding. The p5.sound library expands upon the Web
Audio API and includes features such as audio input, playback, analysis, synthesis, sequencing, scheduling, effects, recording, and more.

## Resources
- [p5.js Reference](https://p5js.org/reference/)
- [cdnjs](https://cdnjs.com/libraries/p5.js)
- [p5js](https://p5js.org/)
- [Creating a Local p5.js Project](https://www.codecademy.com/article/p5js-creating-a-local-project)
- [Learn p5.js: Fundamentals](https://www.codecademy.com/learn/learn-p5js-fundamentals)
- [p5.js Tutorial (geeksforgeeks)](https://www.geeksforgeeks.org/p5-js/?ref=lbp)
- [Sound manipulation in p5.js](https://www.nicholasbrown.co.uk/tutorial/sound-manipulation-in-the-browser-with-p5js.html)

<hr>
<p align="center">
Made with a 🙂 by <a href="https://simonberner.dev">Simon Berner
</p>

<p align="center">
<a href="https://www.buymeacoffee.com/simonberner" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
</p>
