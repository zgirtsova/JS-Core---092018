function getNumberOfEqualsNeighbours(matrix) {
    let neighbors = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (isInMatrix(matrix, i, j + 1) && matrix[i][j] === matrix[i][j + 1]) {
                neighbors++;
            }

            if (isInMatrix(matrix, i + 1, j) && matrix[i][j] === matrix[i + 1][j]) {
                neighbors++;
            }

        }
    }

    function isInMatrix(matrix, row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }

    console.log(neighbors);
}

function equalNeighborsCount(matrix) {

    let neighbors = 0;
    for (let row = 0; row < matrix.length-1; row++)
        for (let col = 0; col < matrix[row].length; col++)
            if (matrix[row][col] === matrix[row + 1][col]) {
                neighbors++;
            } else if (matrix[row][col] === matrix[row][col + 1]) {
                neighbors++;
            }
    // TODO: check also the horizontal neighbors
    return neighbors;
}


getNumberOfEqualsNeighbours([[2, 2, 5, 7, 4],
                             [4, 0, 5, 3, 4],
                             [2, 5, 5, 4, 2]]);

console.log(equalNeighborsCount([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]));