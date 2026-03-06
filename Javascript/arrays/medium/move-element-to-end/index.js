function moveElementToEnd(array, toMove) {
  let lIdx = 0;
  let rIdx = array.length - 1;

  while (lIdx < rIdx) {
    const left = array[lIdx];
    const right = array[rIdx];

    if (right === toMove) {
      rIdx--;
    } else if (left === toMove) {
      const tmp = right;
      array[rIdx] = left;
      array[lIdx] = tmp;

      lIdx++;
      rIdx--;
    } else {
      lIdx++;
    }
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
