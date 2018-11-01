let fun = matrix => console.log(Math.max.apply(null, matrix.reduce((row1, row2) => row1.concat(row2))));
function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));;