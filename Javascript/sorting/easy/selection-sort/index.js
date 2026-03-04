function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let sIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[sIdx] > array[j]) {
        sIdx = j;
      }
    }

    if (sIdx !== i) {
      swap(i, sIdx, array);
    }
  }

  return array;
}

function swap(idx, sIdx, array) {
  const tmp = array[idx];

  array[idx] = array[sIdx];
  array[sIdx] = tmp;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
