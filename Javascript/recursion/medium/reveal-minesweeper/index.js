function revealMinesweeper(board, row, column) {
  const cell = board[row][column];
  if (cell === 'M') {
    board[row][column] = 'X'
  }

  if (Number(cell) > 0) {
    return board;
  }

  revealCell(board, row, column);
  return board;
}

function revealCell(board, row, col) {
  const outsideCell = row < 0 || row >= board.length || col < 0 || col >= board[0].length;
  if (outsideCell) {
    return;
  }

  const cell = board[row][col];
  if (cell !== 'H') {
    return;
  }


  let total = 0;
  let adjacents = getAdjacents(row, col);

  for (let adjacent of adjacents) {
    const outside = adjacent[0] < 0 || adjacent[0] >= board.length ||
      adjacent[1] < 0 || adjacent[1] >= board[0].length;

    if (outside) {
      continue;
    }

    let aCell = board[adjacent[0]][adjacent[1]];
    if (aCell === 'M') {
      total++;
    }
  }

  board[row][col] = total.toString();
  if (total == 0) {
    for (let adjacent of adjacents) {
      revealCell(board, adjacent[0], adjacent[1])
    }
  }
}

function getAdjacents(row, col) {
  return [
    [row, col - 1], // left
    [row - 1, col - 1], // topLeftCorner
    [row - 1, col], // top
    [row - 1, col + 1], //topRightCorner,
    [row, col + 1], // right,
    [row + 1, col + 1], // bottomRightCorner,
    [row + 1, col], // bottom
    [row + 1, col - 1] //bottomLeftCorner,
  ];
}

// Do not edit the line below.
exports.revealMinesweeper = revealMinesweeper;
