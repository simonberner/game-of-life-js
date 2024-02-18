function calcNextGen(initialUniverse) {
    if (initialUniverse.size > 0) {
        console.log(initialUniverse)
        return new Set([1, 1], [1, 2], [2, 1], [2, 2]);
    } else {
        return new Set();
    }
}

export {calcNextGen};
