function spiralTraverse(array) {
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  let result = [];

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(array[startRow][i]);
    }

    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(array[i][endCol]);
    }

    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) {
        break;
      }

      result.push(array[endRow][i]);
    }

    for (let i = endRow - 1; i >= startRow + 1; i--) {
      if (startCol === endCol) {
        break;
      }

      result.push(array[i][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
