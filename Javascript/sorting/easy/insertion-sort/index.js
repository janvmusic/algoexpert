function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      const curr = array[j];
      const prev = array[j - 1];

      if (curr > prev) {
        break;
      }

      swap(j, array);
    }
  }

  return array;
}

function swap(idx, array) {
  const tmp = array[idx];

  array[idx] = array[idx - 1];
  array[idx - 1] = tmp;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
