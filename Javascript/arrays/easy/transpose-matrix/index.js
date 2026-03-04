function transposeMatrix(matrix) {
  const x = matrix.length;
  const y = matrix[0].length;

  const transposedMatrix = Array.from({ length: y }, () => Array.from({ length: x }, () => null));

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
